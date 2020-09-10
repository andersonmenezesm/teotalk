import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('podcasts')
class Podcast {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  audiofile: string;

  @Column()
  avatar: string;
}

export default Podcast;
