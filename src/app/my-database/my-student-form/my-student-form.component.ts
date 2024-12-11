import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { StudentModel } from '../Student';

@Component({
  selector: 'app-my-student-form',
  templateUrl: './my-student-form.component.html',
  styleUrls: ['./my-student-form.component.css'],
})
export class MyStudentFormComponent implements OnInit {
  options: string[] = [];
  constructor() {
    const numbers = [1, 2, 3, 4];
    const letters = ['A', 'B', 'C', 'D'];

    this.options = letters
      .map((letter) => numbers.map((number) => `${number}.${letter}`))
      .reduce((acc, curr) => acc.concat(curr), []);
  }
  @Input()
  AllStudentsNames: string[] | null = null;
  @Input()
  NewStudent: StudentModel = new StudentModel(
    '',
    '',
    '',
    1,
    '',
    '',
    '',
    '',
    false,
    ''
  );
  updateCurrentTime(): string {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }

  @Output()
  zdrojStudentEdit: EventEmitter<StudentModel> =
    new EventEmitter<StudentModel>();

  ngOnInit() {}
  onSubmit(): void {
    const nameContainsInvalidCharacters = /\d|\s/.test(this.NewStudent.Name);
    const surnameContainsInvalidCharacters = /\d|\s/.test(
      this.NewStudent.Surname
    );
    if (this.NewStudent.Name == '' || this.NewStudent.Surname == '') {
      alert('Studnet Name or Student Surname is empty!');
      return;
    }
    if (this.AllStudentsNames != null) {
      if (
        this.AllStudentsNames.includes(
          `${this.NewStudent.Name} ${this.NewStudent.Surname}`
        )
      ) {
        alert('Student with this Name and Surname already exists');
        return;
      }
    } else {
      console.log(
        this.AllStudentsNames,
        `${this.NewStudent.Name} ${this.NewStudent.Surname}`
      );
    }
    if (nameContainsInvalidCharacters) {
      alert('Name should not contain numbers or white spaces.');
      return;
    }
    if (surnameContainsInvalidCharacters) {
      alert('Surname should not contain numbers or white spaces.');
      return;
    }
    if (this.NewStudent.GPA < 1 || this.NewStudent.GPA > 5) {
      alert('GPA must be in the range of 1 to 5.');
      return;
    }
    if (new Date(this.NewStudent.BirthDate) > new Date()) {
      alert('Invalid BirthDate, Date does not even exist');
      return;
    }
    this.NewStudent.LastEdit = this.updateCurrentTime();
    this.zdrojStudentEdit.emit(this.NewStudent);
  }
}
