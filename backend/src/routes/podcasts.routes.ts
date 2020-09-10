import { Router} from 'express';
import CreatePodcastService from '../services/CreatePodcastService';
import DeletePodcastService from '../services/DeletePodcastService';



const podcastsRouter = Router();


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

podcastsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deletePodcast = new DeletePodcastService();

  await deletePodcast.execute(id);

  return response.status(204).send();
} )


export default podcastsRouter;
