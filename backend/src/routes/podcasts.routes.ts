import { Router} from 'express';
import { getCustomRepository } from 'typeorm';
import CreatePodcastService from '../services/CreatePodcastService';


const podcastsRouter = Router();

podcastsRouter.get('/', async (request, response) => {

  const resposta = getCustomRepository;

  return response.json(resposta);
});

podcastsRouter.post('/' ,async (request, response) => {
  const { title, description, audiofile, avatar } = request.body;

  const createPodcast = new CreatePodcastService();

  const podcast = await createPodcast.execute({
    title,
    description,
    audiofile,
    avatar
  });

  return response.json(podcast);
});



export default podcastsRouter;
