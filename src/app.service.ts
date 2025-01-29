import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(): string {
    return 'Blog App Full stack with NESTJS and React';
  }
}
