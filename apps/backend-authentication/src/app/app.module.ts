import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CustomStrategy} from "../app/auth/auth.strategy";
import {PassportModule} from "@nestjs/passport";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'custom' }),
  ],
  controllers: [AppController],
  providers: [AppService, CustomStrategy],
})
export class AppModule {}
