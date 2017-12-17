import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {  Input, Output } from '@angular/core';
import {PostService} from '../post.servise'
 import { Params } from '@angular/router';
 import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})


export class PostPageComponent implements OnInit {
  id: String;
   private sub: any;
  post = {
    title:'',
    content:''
  };

  onDelete(post){
    console.log('onDelete');
    var isSure = confirm("Are you sure?");
    if (isSure) {
      console.log(isSure+" delete");
    console.log(this.postService.deletePost(post));


  }else   console.log(isSure+" delete")
  }

constructor(private postService: PostService, private route: ActivatedRoute) {
   //var queryParam = this._routeParams.get('id');
}
ngOnInit() {
  //  this.posts = this.postService.posts;
  this.sub = this.route.params.subscribe(params => {
         this.id = params['id']; // (+) converts string 'id' to a number

         // In a real app: dispatch action to load the details here.
      });
   console.log(this.id);
  this.postService.getPost(this.id).subscribe(post=>{
  this.post = post;
  console.log(post);
});
}
title = 'My Blog';


}
