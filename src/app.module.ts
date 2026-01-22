import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BillingModule } from './billing/billing.module';
import { MedicalRecordsModule } from './medical-records/medical-records.module';
import { CommonModule } from './common/common.module';
import { DatabaseConfig } from './config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfig,
    }),
    CommonModule,
    BillingModule,
    MedicalRecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
