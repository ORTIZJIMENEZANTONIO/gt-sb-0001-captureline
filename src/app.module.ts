import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './core/exception.interceptor';
import { PkComerLcModule } from './modules/pk-comer-lc/pk-comer-lc.module';
import { LcsExtemporaneousModule } from './modules/lcs-extemporaneous/lcs-extemporaneous.module';
import { EnelMsModule } from './modules/enel-ms/enel-ms.module';

@Module({
  imports: [PkComerLcModule, LcsExtemporaneousModule, EnelMsModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
