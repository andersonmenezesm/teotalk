import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Text from '../../models/texts';

class DeletePodcastService {
  public async execute(id: string): Promise<void> {
    const textRepository = getRepository(Text);

    const text = await textRepository.findOne(id);

    if (!text) {
      throw new AppError('Podcast does not exist');
    }

    await textRepository.remove(text);

  }
}
export default DeletePodcastService;
