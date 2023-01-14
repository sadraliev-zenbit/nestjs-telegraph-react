import { TelegrafContext } from '@interfaces/context.interface';
import { Update, Ctx, Command } from 'nestjs-telegraf';
import { WebAppService } from './web.service';

@Update()
export class WebAppUpdate {
  constructor(private readonly webAppService: WebAppService) {}

  @Command('web')
  async onWebApp(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('open', this.webAppService.activeWebApp());
  }
}
