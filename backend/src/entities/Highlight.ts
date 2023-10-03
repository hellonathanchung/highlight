// backend/src/entities/Highlight.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Highlight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileId: number;

  @Column()
  text: string;

  // Add more columns as per your requirements, like coordinates, page number, etc.
}
