import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../_services/flickr.service';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent implements OnInit {
  images:any[] =  [];
  keyword!: string;

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
  }

    font1 = '20px'
    font2 = '40px'
    font = true

  fontSize() {
      this.font = !this.font;
    }
  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }
  searchflores(event: any) {
    this.keyword="flores";
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }

  searchanimales(event: any) {
    this.keyword="animales";
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }

  searchmusica(event: any) {
    this.keyword="musica";
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }
  onScroll() {
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = this.images.concat(res);
      });
    }
  }

}
