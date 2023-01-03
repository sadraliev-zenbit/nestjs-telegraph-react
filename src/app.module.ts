import { EchoModule } from '@modules/echo/echo.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('TELEGRAM_BOT_TOKEN'),
        /**
         * webhook setting
         *
         * webhook: {
         *    domain: configService.get<string>('WEBHOOK_URL'),
         *    hookPath: configService.get<string>('SECRET_PATH'),
         * },
         */
      }),
    }),
    EchoModule,
  ],
})
export class AppModule {}
