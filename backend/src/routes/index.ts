import { Router } from 'express';
import podcasts from './podcasts.routes';

const routes = Router();

routes.use('/podcasts', podcasts);

export default routes;
