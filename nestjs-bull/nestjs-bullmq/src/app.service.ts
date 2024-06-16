import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { TRANSCODE_QUEUE } from './constants';

@Injectable()
export class AppService {

  constructor(@InjectQueue(TRANSCODE_QUEUE) private transcodeQueue: any) {}

  getHello(): string {
    return 'Hello World!';
  }

  async transcode() {
    await this.transcodeQueue.add({
      file: 'audio.mp3',
    });
  }
}
