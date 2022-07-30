import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'application_1';
  num1 = 500;
  num2 = 600;
  getVal() {
    return 'SUM ID:' + (this.num1 + this.num2);
  }
}
