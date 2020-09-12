import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

  @Column()
  avatar: string;

  @Column()
  text: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  secondauthor: string;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Text;
