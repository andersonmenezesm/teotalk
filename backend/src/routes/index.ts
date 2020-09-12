import { Router } from 'express';
//import podcasts from './podcasts.routes';
import texts from './text.routes';

const routes = Router();

//routes.use('/podcasts', podcasts);
routes.use('/texts', texts);


export default routes;
