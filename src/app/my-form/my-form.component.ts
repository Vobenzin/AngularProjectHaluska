import { FactoryTarget } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  constructor() {}

  @Output()
  zdrojLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  isLogIn: boolean = false;
  targetedUsername: string = 'admin';
  targetedPassword: string = 'angular';
  myUsername: string;
  myPassword: string;

  hintButton: boolean = false;
  hintVisText: string = '';
  ngOnInit() {
    console.log('Welcome in to Log in Page!');
  }

  NameGet(): void {
    console.log('Usernname: ', this.myUsername);
    console.log('Password: ', this.myPassword);
    this.CheckValidUser();
  }
  OnHintClick(): void {
    this.hintVisText = `Username: ${this.targetedUsername} Password: ${this.targetedPassword}`;
  }
  OnLogOutClick(): void {
    this.isLogIn = false;
    this.zdrojLogin.emit(this.isLogIn);
  }

  CheckValidUser(): void {
    if (
      this.myUsername == this.targetedUsername &&
      this.myPassword == this.targetedPassword
    ) {
      this.isLogIn = true;
      this.zdrojLogin.emit(this.isLogIn);
    } else {
      this.hintButton = true;
    }
  }
}
