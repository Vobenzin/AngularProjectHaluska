import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule } from '@angular/forms';
import { MyDatabaseComponent } from './my-database/my-database.component';
import { MyStudentFormComponent } from './my-database/my-student-form/my-student-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyFormComponent, MyDatabaseComponent,MyStudentFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
