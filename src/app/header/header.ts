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

  delete(index: number) {
    this.animals.splice(index, 1);
  }

  // dropBtn(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.animals, event.previousIndex, event.currentIndex);
  // }

  // add(event: KeyboradEvent) {
  //   if (event.key === 'Enter') {
  //     const input = (event.target as HTMLInputElement).value;
  //     const colors = ['golden', 'gray', 'white', 'black', 'brown'];
  //     const redemColor = colors[Math.floor(Math.random() * colors.length)];
  //     this.animals.push({
  //       name: input,
  //       age: Math.floor(Math.random() * 10) + 1,
  //       color: redemColor,
  //     });

  //     (event.target as HTMLInputElement).value = '';
  //   }
  // }
  animals = [
    { name: 'Leo', age: 3, color: 'golden' },
    { name: 'Milo', age: 2, color: 'gray' },
    { name: 'Bella', age: 5, color: 'white' },
    { name: 'Zara', age: 1, color: 'black' },
    { name: 'Rocky', age: 4, color: 'brown' },
  ];

  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('animals');
      if (data) {
        this.animals = JSON.parse(data);
      }
    }
  }

  saveAnimals(): void {
    this.animals.push();
    localStorage.setItem('animals', JSON.stringify(this.animals));
  }

  add(value: string) {
    const colors = ['golden', 'gray', 'white', 'black', 'brown'];
    this.animals.push({
      name: value,
      age: Math.floor(Math.random() * 10) + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
    this.saveAnimals(); // 新增後儲存
  }

  removeBtn(index: number) {
    this.animals.splice(index, 1);
    this.saveAnimals(); // 新增後儲存
  }
}
