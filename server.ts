import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';
import { processChatRequest } from './server/chatHandler';

// Load environment variables from .env if present
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);
  const isProd = process.env.NODE_ENV === 'production';

  // Parse incoming JSON payloads
  app.use(express.json({ limit: '1mb' }));

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    const hasKey = Boolean(
      process.env.GEMINI_API_KEY &&
      process.env.GEMINI_API_KEY.trim() !== '' &&
      process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY'
    );
    res.json({
      status: 'ok',
      service: 'CHATBOT LAB Proxy Server',
      hasGeminiApiKey: hasKey,
      timestamp: new Date().toISOString(),
    });
  });

  // Secure Chatbot API endpoint - proxying requests to Gemini API
  app.all('/api/chat', async (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).json({
        error: 'METHOD_NOT_ALLOWED',
        message: 'คำขอต้องเป็น HTTP POST เท่านั้น',
      });
      return;
    }

    try {
      const result = await processChatRequest(req.body);
      res.status(result.status).json(result.data);
    } catch (error) {
      console.error('Unhandled error in /api/chat:', error);
      res.status(500).json({
        error: 'INTERNAL_SERVER_ERROR',
        message: 'เกิดข้อผิดพลาดไม่คาดคิดบนเซิร์ฟเวอร์ กรุณาลองใหม่อีกครั้ง',
      });
    }
  });

  if (!isProd) {
    // Mount Vite dev server middleware in development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log(`[Dev] Vite middleware mounted on Express`);
  } else {
    // Serve production static assets from dist folder
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
    console.log(`[Prod] Serving static build from ${distPath}`);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[CHATBOT LAB] Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
