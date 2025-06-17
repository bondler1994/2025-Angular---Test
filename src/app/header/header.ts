import { Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
// import { MatRippleModule } from '@angular/material/core';

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
  phoneNumber: string = '';

  rippleColor: string = 'rgba(255, 255, 255, 0.2)';

  btnToggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.check1 = this.toggleAllBtn;
    this.check2 = this.toggleAllBtn;
  }

  call(phoneNum: string) {
    this.phoneNumber = phoneNum;
  }
}
