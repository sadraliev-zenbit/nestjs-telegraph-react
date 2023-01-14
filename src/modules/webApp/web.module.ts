import { Module } from '@nestjs/common';
import { WebAppUpdate } from './web.update';
import { WebAppService } from './web.service';

@Module({
  providers: [WebAppUpdate, WebAppService],
})
export class WebAppModule {}
