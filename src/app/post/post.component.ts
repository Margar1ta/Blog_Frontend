import { Component, Input, Output } from '@angular/core';

@Component({
  selector:'app-post',
  templateUrl:'./post.component.html',
  styleUrls:['./post.component.scss']
})
export  class PostComponent {

  @Input() post;


  onShow(){
    console.log('onShow');
  }

}
