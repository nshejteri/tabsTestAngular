import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  will = 0;
  did = 0;

  constructor() {}

  ionViewWillEnter() {
    this.will = Date.now();
    console.log('TAB 3 page will enter', this.will);
  }

  ionViewDidEnter() {
    this.did = Date.now();
    console.log('TAB 3 page did enter', this.did);
    console.log('DIFF TAB 3 ', this.did - this.will);
  }
}
