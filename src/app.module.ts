import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './blogs/posts/posts.controller';
import { PostsModule } from './blogs/posts/posts.module';
import { PostsService } from './blogs/posts/posts.service';

@Module({
  imports: [PostsModule],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
