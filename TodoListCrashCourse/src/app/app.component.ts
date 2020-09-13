import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts = []
  
  constructor(private http:HttpClient){

  }

  getPosts(){
    this.http.get(this.ROOT_URL + '/posts').toPromise().then((res:any)=>{
      this.posts = res;
    }).catch(error=>{
      console.log(error);
      
    })
  }

 
}

