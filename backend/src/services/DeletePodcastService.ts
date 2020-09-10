import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Podcast from '../models/podcasts';

class DeletePodcastService {
  public async execute(id: string): Promise<void> {
    const podcastRepository = getRepository(Podcast);

    const podcast = await podcastRepository.findOne(id);

    if (!podcast) {
      throw new AppError('Podcast does not exist');
    }

    await podcastRepository.remove(podcast);

  }
}
export default DeletePodcastService;
