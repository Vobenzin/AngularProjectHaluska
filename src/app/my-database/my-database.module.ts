import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MyStudentFormComponent } from './my-student-form/my-student-form.component';
import { MyDatabaseComponent } from './my-database.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [MyDatabaseComponent, MyStudentFormComponent],
  bootstrap: [MyDatabaseComponent],
})
export class myDatabaseModul {}
