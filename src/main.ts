import { NestFactory } from '@nestjs/core';
import { getBotToken } from 'nestjs-telegraf';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * webhook setting
   */
  const bot = app.get(getBotToken());
  app.use(bot.webhookCallback());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
