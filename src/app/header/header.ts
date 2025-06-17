import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  placeholder = 'pls input me';

  toggleAllBtn = false;
  check1 = false;
  check2 = false;
  classX = '';

  btnToggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.check1 = this.toggleAllBtn this.smallText;
    this.check2 = this.toggleAllBtn this.smallText;

  }
}
