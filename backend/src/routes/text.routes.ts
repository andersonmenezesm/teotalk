import {  Router } from 'express';
import CreateTextService from '../services/text/CreateTextService';
import DeleteTextService from '../services/text/DeleteTextService';
import UpdateTextService from '../services/text/UpdateTextService';
import { getRepository } from 'typeorm';
import Text from '../models/podcasts';

const textRouter = Router();

textRouter.get('/', async (request, response) => {
  const textRepository = getRepository(Text);

  const text = await textRepository.find();

  return response.json(text);
});

// // podcastsRouter.get('/search', async (request, response) => {
// //   const podcastRepository = getRepository(Podcast);

// //   const podcast = await podcastRepository.find();

// //   return response.json(podcast);
// // })



textRouter.post('/' ,async (request, response) => {
  const { title, description, text, secondauthor, avatar } = request.body;

  const createText = new CreateTextService();

  const texts = await createText.execute({
    title,
    description,
    text,
    secondauthor,
    avatar
  });

  return response.json(texts);
});

textRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deletePodcast = new DeleteTextService();

  await deletePodcast.execute(id);

  return response.status(204).send();
});

textRouter.put('/:id', async (request, response) => {
  const { id   } = request.params;

  const updatePodcast = new UpdateTextService();

  await updatePodcast.execute();

  return response;
});

export default textRouter;
