import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Markup } from 'telegraf';

@Injectable()
export class WebAppService {
  constructor(private readonly configService: ConfigService) {}
  activeWebApp() {
    return Markup.inlineKeyboard([
      [
        Markup.button.webApp(
          'open',
          this.configService.get<string>('WEB_APP_URL'),
        ),
      ],
    ]);
  }
}
