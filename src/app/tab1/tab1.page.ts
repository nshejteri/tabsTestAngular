import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  will = 0;
  did = 0;

  constructor() {}

  ionViewWillEnter() {
    this.will = Date.now();
    console.log('TAB 1 page will enter', this.will);
  }

  ionViewDidEnter() {
    this.did = Date.now();
    console.log('TAB 1 page did enter', this.did);
    console.log('DIFF TAB 1 ', this.did - this.will);
  }
}
