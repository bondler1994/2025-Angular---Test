import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Input()
  footerText: string = '';

  testInput = 'ola';
  red = 'red';
  isHighlighted = false;
  isHiddenKeepDon = true;
  hideNgFor = true;

  test = 'nothing here';
  constructor() {}

  toggleHighlight() {
    this.hideNgFor = !this.hideNgFor;
    this.isHighlighted = !this.isHighlighted;
  }

  toggleHiddenAndKeepTheDom() {
    this.isHiddenKeepDon = !this.isHiddenKeepDon;
  }
}
