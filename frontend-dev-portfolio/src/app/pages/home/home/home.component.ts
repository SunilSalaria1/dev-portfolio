import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dynamicContent: any = 'I build things for the web0.';
  dynamic: any = [
    'I build things for the web0.',
    'I build things for the web1.',
    'I build things for the web2.',
    'I build things for the web3.',
    'I build things for the web4.',
  ];
  setInterval: number = 1000;
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
        console.log('value ' + i);
      }, this.setInterval * i);
    }
  }
}
