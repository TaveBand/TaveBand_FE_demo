// src/mocks/browser.js
import { setupWorker, rest } from 'msw';

export const worker = setupWorker(
  rest.post('/dailband/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '로그인 성공',
        userId: '12345',
      }),
    );
  }),
  rest.get('/dailband/userinfo', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: '12345',
      }),
    );
  }),
);