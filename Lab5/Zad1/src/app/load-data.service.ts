import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, Photo } from "./interfaces";


@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  putPost(post: Post) {
    this.http.post('https://jsonplaceholder.typicode.com/posts', post).subscribe(response => {
      console.log(response);
    });
  }

  getPhotos() {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
