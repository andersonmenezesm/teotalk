import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn } from 'typeorm';

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

  @CreateDateColumn()
  date: Date;

  @Column()
  secondauthor: string;
}

export default Text;
