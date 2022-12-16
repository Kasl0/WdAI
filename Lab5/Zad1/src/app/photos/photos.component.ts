import { Component } from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { Photo } from "./../interfaces";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photoList: Photo[] = [];

  constructor(service: LoadDataService) {
    service.getPhotos().subscribe(photoList => this.photoList = photoList);
  }
}
