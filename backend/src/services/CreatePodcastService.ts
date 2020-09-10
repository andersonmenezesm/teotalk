
import { getRepository } from 'typeorm';

import Podcast from '../models/podcasts';

interface Request {
  title: string,
  description: string,
  audiofile?: string,
  avatar?: string
}

class CreatePodcastService {
  public async execute({ title, description, audiofile, avatar }: Request) {
    const podcastRepository = getRepository(Podcast);

    const podcast = podcastRepository.create({
      title,
      description,
      audiofile,
      avatar
    });

    await podcastRepository.save(podcast);

    return podcast;

  }
}

export default CreatePodcastService;
