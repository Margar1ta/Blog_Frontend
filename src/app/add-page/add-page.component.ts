import { Component, OnInit } from '@angular/core';
import { Page } from './page'
import {PostService} from '../post.servise'
@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  constructor(private postService: PostService) { }
  submitted = false;
  model = new Page('', '', '', 'Chuck Overstreet');
  onSubmit(model) {
  this.postService.addPost(model);
  /*this.submitted = true;

  event.preventDefault();
  console.log("true");
 if (model.id && model.title && model.content && model.categories) {
   console.log("true");
   var headers = new Headers();
   headers.append("Content-Type", "application/json");
   this.http.put('https://pure-refuge-32982.herokuapp.com/posts/'+model.id+'/ooo',
   '{"id":"xyz4","title":"xyz4","categories":"xyz4","content":"xyz4"}',
   new RequestOptions({
   headers: headers
})).subscribe((res) => {
  console.log(res);
});
}else alert ('false');
console.log("false");*/

 }
  ngOnInit() {

  }

}
