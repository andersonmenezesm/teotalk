import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('texts')
class Text {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column('time with time zone')
  date: Date;

  @Column()
  secondauthor: string;
}

export default Text;
