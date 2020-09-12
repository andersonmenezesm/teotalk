import { request } from 'express';
import { getConnection, getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Text from '../../models/texts';

interface Request {
  title: string,
  description: string,
  text: string,
  secondauthor: string,
  avatar?: string
}

await getConnection()
  .createQueryBuilder()
  .update(Text)
  .set({ title, description, text , secondauthor, avatar }:Request)

class UpdatePodcastService {
  // public async execute(id: string , request: Request): Promise<void> {
  //   const textRepository = getRepository(Text);


  //   const texts = await textRepository.findOne(id);

  //   if (!texts) {
  //     throw new AppError('Podcast does not exist');
  //   }

  //   await textRepository.update( id, request);

  // }


}
export default UpdatePodcastService;
