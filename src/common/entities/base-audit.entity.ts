import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  VersionColumn,
} from 'typeorm';

export abstract class BaseAuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    name: 'created_at',
    nullable: false,
  })
  createdAt: Date;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'created_by',
    nullable: true,
  })
  createdBy: string;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'updated_at',
    nullable: false,
  })
  updatedAt: Date;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'updated_by',
    nullable: true,
  })
  updatedBy: string;

  @DeleteDateColumn({
    type: 'timestamp with time zone',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt: Date;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'deleted_by',
    nullable: true,
  })
  deletedBy: string;

  @VersionColumn({
    name: 'version',
    default: 0,
  })
  version: number;

  @Column({
    type: 'inet',
    name: 'ip_address',
    nullable: true,
  })
  ipAddress: string;

  @Column({
    type: 'varchar',
    length: 500,
    name: 'user_agent',
    nullable: true,
  })
  userAgent: string;

  @Column({
    type: 'jsonb',
    name: 'metadata',
    nullable: true,
    default: {},
  })
  metadata: Record<string, any>;

  @Column({
    type: 'timestamp with time zone',
    name: 'last_accessed_at',
    nullable: true,
  })
  lastAccessedAt: Date;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'last_accessed_by',
    nullable: true,
  })
  lastAccessedBy: string;
}
