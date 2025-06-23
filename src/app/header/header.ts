import { Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-header',
  imports: [
    MatRippleModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    Footer,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  textApi = [
    {
      userId: 1,
      id: 1,
      title: 'quidem molestiae enim',
    },
    {
      userId: 1,
      id: 2,
      title: 'sunt qui excepturi placeat culpa',
    },
    {
      userId: 1,
      id: 3,
      title: 'omnis laborum odio',
    },
    {
      userId: 1,
      id: 4,
      title: 'non esse culpa molestiae omnis sed optio',
    },
    {
      userId: 1,
      id: 5,
      title: 'eaque aut omnis a',
    },
  ];

  infoCols: string[] = [
    '交易對象名稱',
    '統編',
    '交易對象編號',
    '角色',
    '交易對象類型',
    '地區',
    '地址',
  ];

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
