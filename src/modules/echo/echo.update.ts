import { TelegrafContext } from '@interfaces/context.interface';
import {
  Help,
  Start,
  Update,
  Ctx,
  InjectBot,
  Message,
  Hears,
} from 'nestjs-telegraf';
import { ReverseTextPipe } from 'src/common/pipes/reverse-text.pipe';
import { Telegraf } from 'telegraf';
import { EchoService } from './echo.service';

@Update()
export class EchoUpdate {
  constructor(
    @InjectBot() private bot: Telegraf<TelegrafContext>,
    private readonly echoService: EchoService,
  ) {}

  @Start()
  async start(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Welcome');
  }

  @Help()
  async help(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Send me a sticker');
  }
  @Hears('text')
  onMessage(@Message('text', new ReverseTextPipe()) reversedText: string) {
    return this.echoService.echo(reversedText);
  }
}
