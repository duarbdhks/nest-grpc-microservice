import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('comments')
export class CommentEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ type: 'uuid', nullable: false })
  organization: string

  @Column({ type: 'text', nullable: false })
  comment: string

  @CreateDateColumn({ type: 'timestamptz', nullable: false, default: () => 'NOW()' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz', select: false })
  updated_at: Date
}
