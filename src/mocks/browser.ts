import { setupWorker, rest } from 'msw';
import { SubscribeRequest } from '../interfaces/subscribeRequest.interface';

const worker = setupWorker(
  // mock successful subsription
  rest.post<SubscribeRequest>('/subscribe', async (req, res, ctx) => {
    const { email, difficulty } = await req.json();

    if (email.length && email.includes('@')) {
      return res(ctx.status(200), ctx.json({ email, difficulty }));
    } else {
      return res(ctx.status(400));
    }
  })
  // mock server error
  // rest.post<SubscribeRequest>('/subscribe', async (_req, res, ctx) => {
  //   return res(ctx.status(500));
  // })
);

worker.start();
