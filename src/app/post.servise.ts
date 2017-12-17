import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map'
import { Headers } from '@angular/http';
@Injectable()
export class PostService {

  constructor(private http: Http){}

  getPosts() {
  return  this.http.get('https://pure-refuge-32982.herokuapp.com/posts/ooo')
  .map(res => res.json())
  }
  getPost(id) {
  return  this.http.get('https://pure-refuge-32982.herokuapp.com/posts/'+id+'/ooo')
  .map(res => res.json())
  }
  deletePost(post) {
    console.log('res');
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log('res2');

    return this.http.delete('https://pure-refuge-32982.herokuapp.com/posts/'+post.id+'/ooo',
    new RequestOptions({
    headers: headers,
     method: "delete",
    body: '{"id":"xyz3","title":"xyz3","categories":"xyz3","content":"xyz3"}'
 })).subscribe((res) => {
   console.log(res);
});


  }
  addPost(model){
    console.log("true");
   if (model.id && model.title && model.content && model.categories) {
     console.log("true");
     var headers = new Headers();
     headers.append("Content-Type", "application/json");
     headers.append("Origin", "123123");
     this.http.post('https://pure-refuge-32982.herokuapp.com/posts/ooo',
     '{"id":"'+model.id+'","title":"'+model.title+'","categories":"'+model.categories+'","content":"'+model.content+'"}',
     new RequestOptions({
     headers: headers
  })).subscribe((res) => {
    console.log(res);
  });
  }else alert ('false');
  console.log("false");

  }
  posts = [
    {name:'lala 1'},
    {name:'lala 2'},
    {name:'lala 3'},
    {name:'lala 4'},
    {name:'lala 5'},
    {name:'lala 6'}
  ]
}
