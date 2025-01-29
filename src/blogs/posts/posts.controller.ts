import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/createPost.dto';
import { Post, Post, Post } from './model/posts.model';

@Controller('/api/blog/posts')
export class PostsController {
  // injecting post services into the controller
  constructor(private postService: PostsService) {}

  // Get all posts
  @Get()
  getPosts() {
    this.postService.getPosts();
  }

  //   Get post by id

  @Get(':id')
  getPostsById(@Param('id') id: string) {
    return this.postService.getPostsById(id);
  }

  //   Creating a task

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }
}
