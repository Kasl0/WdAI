import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadDataService } from '../load-data.service';
import { Post } from "./../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  postList: Post[] = [];
  service: LoadDataService;

  modelForm : FormGroup;

  constructor(service: LoadDataService, private formBuilder : FormBuilder) {
    this.service = service;
    this.service.getPosts().subscribe(postList => this.postList = postList);

    this.modelForm = this.formBuilder.group({
      user: ['', Validators.required],
      post: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {

    let newPost: Post = {
      userId: form.value.user,
      id: form.value.post,
      title: form.value.title,
      body: form.value.content,
    };

    this.service.putPost(newPost);
    this.service.getPosts().subscribe(postList => this.postList = postList);

    form.reset();
  }
}
