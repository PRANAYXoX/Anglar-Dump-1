import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  disVal = 0;
  valAdd(val: string) {
    this.disVal = parseInt(val) + 1;
  }
  valDec(val: string) {
    parseInt(val) == 0
      ? alert('Invald Operation!')
      : (this.disVal = parseInt(val) - 1);
  }
}
