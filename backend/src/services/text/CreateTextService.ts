
import { getRepository } from 'typeorm';

import Text from '../../models/texts';

interface Request {
  title: string,
  description: string,
  text: string,
  secondauthor: string,
  avatar?: string
}

class CreateTextService {
  public async execute({ title, description, text, secondauthor , avatar }: Request) {
    const textRepository = getRepository(Text);

    const podcast = textRepository.create({
      title,
      description,
      text,
      secondauthor,
      avatar
    });

    await textRepository.save(podcast);

    return podcast;
  }
}

export default CreateTextService;
