import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadDataService } from '../load-data.service';
import { Photo } from "./../interfaces";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  id: number = 0;

  photoList: Photo[] = [];

  constructor(private route: ActivatedRoute, service: LoadDataService) {
    this.route.params.subscribe(id => this.id = id['id']);
    service.getPhotos().subscribe(photoList => this.photoList = photoList);
  }
}
