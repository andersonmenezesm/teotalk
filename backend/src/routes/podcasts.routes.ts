import { Router } from 'express';


const podcastsRouter = Router();

podcastsRouter.get('/', async (request, response) => {
  return response.json({ mensage :'neto'});
});

export default podcastsRouter;
