import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.servise'

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {

  posts = [];
constructor(private postService: PostService) {}
ngOnInit() {
  //  this.posts = this.postService.posts;
  this.postService.getPosts().subscribe(posts=>{
  this.posts = posts;
  console.log(posts);
});
}
title = 'My Blog';

}
