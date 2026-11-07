
import type { IncomingMessage, ServerResponse } from 'http';
import { processChatRequest } from '../server/chatHandler.js';

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

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf-8');
  return raw ? JSON.parse(raw) : {};
}

export default async function handler(
  req: VercelRequestLike,
  res: VercelResponseLike
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, {
      error: 'METHOD_NOT_ALLOWED',
      message: 'คำขอต้องเป็น HTTP POST เท่านั้น',
    });
  }

  try {
    let body: any;

    try {
      body = await parseRequestBody(req);
    } catch (error) {
      console.error('Invalid request body:', error);
      return sendJson(res, 400, {
        error: 'INVALID_JSON',
        message: 'รูปแบบข้อมูลที่ส่งมาไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
      });
    }

    const result = await processChatRequest(body);
    return sendJson(res, result.status, result.data);
  } catch (error) {
    console.error('Vercel /api/chat handler failed:', error);
    return sendJson(res, 500, {
      error: 'INTERNAL_SERVER_ERROR',
      message: 'เซิร์ฟเวอร์เกิดข้อผิดพลาด กรุณาตรวจสอบ Runtime Logs',
    });
  }
}
