import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuditLog } from './entities/audit-log.entity';
import { AuditLogService } from './services/audit-log.service';
import { DataEncryptionService } from './services/data-encryption.service';
import { AuditSubscriber } from './subscribers/audit.subscriber';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AuditLog])],
  providers: [
    AuditLogService,
    DataEncryptionService,
    {
      provide: 'DATA_SOURCE',
      useFactory: (dataSource: DataSource) => dataSource,
      inject: [DataSource],
    },
    AuditSubscriber,
  ],
  exports: [AuditLogService, DataEncryptionService, AuditSubscriber],
})
export class CommonModule {}
