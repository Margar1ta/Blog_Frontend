import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpModule } from '@angular/http';
import { CComponent } from './c/c.component';
import { PostPageComponent } from './post-page/post-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes = [
  {path: '', component:CComponent},
  {path: 'view/:id', component:PostPageComponent},
  {path: 'add', component:AddPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CComponent,
    PostPageComponent,
    AddPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
