import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    console.log('on init.....');
  }

  onLogIn(event: boolean): void {
    this.isLoggedIn = event;
    console.log(this.isLoggedIn, 'Databaza');
  }
}
