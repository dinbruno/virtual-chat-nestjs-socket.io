import { Module } from '@nestjs/common';
import { AppGateway } from './app-gateway';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
