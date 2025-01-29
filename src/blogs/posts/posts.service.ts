import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Post } from './model/posts.model';
import { CreatePostDto } from './dto/createPost.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return this.posts;
  }

  getPostsById(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  createPost(createPostDto: CreatePostDto) {
    this.posts = this.posts.push(createPostDto);
  }
}
