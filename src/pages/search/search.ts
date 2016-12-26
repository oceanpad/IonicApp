import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'search.html'
})
export class SearchPage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

}
