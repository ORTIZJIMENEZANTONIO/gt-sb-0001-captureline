import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './core/exception.interceptor';
import { PkComerLcModule } from './modules/pk-comer-lc/pk-comer-lc.module';

@Module({
  imports: [PkComerLcModule],
  controllers: [AppController],
  providers: [{ provide: APP_FILTER, useClass: AllExceptionsFilter },AppService]
})
export class AppModule {}
