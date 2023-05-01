import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dynamicContent: any = 'I’m a software engineer.';
  dynamic: any = [
    'I’m a software engineer.',
    'Specializing in building.',
    'Exceptional digital experiences.',
    'I’m focused on building accessible.',
    'Human-centered products.',
  ];
  setInterval: number = 1500;
  constructor() {}

  ngOnInit(): void {
    this.displayText();
    // update the dynamic content
    setInterval(() => {
      this.displayText();
    }, 5000);
  }
  // display dynamic content
  displayText() {
    for (let i = 0; i < this.dynamic.length; i++) {
      setTimeout(() => {
        this.dynamicContent = this.dynamic[i];
      }, this.setInterval * i);
    }
  }
}
