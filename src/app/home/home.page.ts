import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
  // effect: 'slide',
  zoom: false,
  // spaceBetween: 100,ss
  centeredSlides: true,
  width: 500,
  slidesPerView: 1
  };
}
