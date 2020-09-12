import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('podcasts')
class Podcast {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('time with time zone')
  date: Date;

  @Column()
  audiofile: string;

  @Column()
  avatar: string;
}

export default Podcast;
