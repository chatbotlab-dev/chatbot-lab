import type { IncomingMessage, ServerResponse } from 'http';
import { processChatRequest } from '../server/chatHandler';

interface VercelRequestLike extends IncomingMessage {
  body?: any;
  method?: string;
}

interface VercelResponseLike extends ServerResponse {
  status(code: number): this;
  json(body: any): this;
  setHeader(name: string, value: string | number | readonly string[]): this;
}

function sendJson(res: VercelResponseLike, status: number, data: unknown) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(status).json(data);
  }
  res.statusCode = status;
  res.end(JSON.stringify(data));
}

async function parseRequestBody(req: VercelRequestLike): Promise<any> {
  if (req.body !== undefined && req.body !== null) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  }

  // Fallback for raw stream
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf-8');
  return raw ? JSON.parse(raw) : {};
}

/**
 * Serverless Function handler for Vercel deployment.
 * Routes POST /api/chat directly to the Gemini API proxy logic.
 */
export default async function handler(req: VercelRequestLike, res: VercelResponseLike) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, {
      error: 'METHOD_NOT_ALLOWED',
      message: 'คำขอต้องเป็น HTTP POST เท่านั้น',
    });
  }

  try {
    const body = await parseRequestBody(req);
    const result = await processChatRequest(body);
    return sendJson(res, result.status, result.data);
  } catch (error) {
    console.error('Error in Vercel /api/chat function:', error);
    return sendJson(res, 500, {
      error: 'INTERNAL_SERVER_ERROR',
      message: 'เกิดข้อผิดพลาดในการประมวลผลคำขอ',
    });
  }
}

