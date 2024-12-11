import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentModel } from './Student';

@Component({
  selector: 'app-my-database',
  templateUrl: './my-database.component.html',
  styleUrls: ['./my-database.component.css'],
})
export class MyDatabaseComponent implements OnInit {
  students: StudentModel[] = [
    new StudentModel(
      'Jozko',
      'Mrkvicka',
      '2006-05-19',
      2.55,
      '4.D',
      'Programovanie',
      'Muz',
      'Vzorny ziak',
      false,
      ''
    ),
    new StudentModel(
      'Ferko',
      'Ceznar',
      '2005-08-12',
      3.24,
      '4.D',
      'Programovanie',
      'Muz',
      'Hlucny,vyrusuje, 4 cierne body',
      false,
      ''
    ),
    new StudentModel(
      'Maria',
      'Terezia',
      '2004-11-03',
      1.5,
      '4.D',
      'Programovanie',
      'Zena',
      'Nadejna volejbalistka',
      false,
      ''
    ),
    new StudentModel(
      'Kamil',
      'Krtko',
      '2006-05-05',
      4.1,
      '3.D',
      'Programovanie',
      'Muz',
      'Kurier-s nadmernymi skusenostami',
      false,
      ''
    ),
  ];
  saveStudents() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  loadStudents() {
    const savedData = localStorage.getItem('students');
    if (savedData) {
      this.students = JSON.parse(savedData);
    }
  }

  filteredStudents = [...this.students];
  searchQuery: string;
  editedStudent: StudentModel | null = null;
  getAllStudentsNames: string[] | null = null;
  addingStudent:boolean=false;
  constructor() {}

  ngOnInit() {
    this.loadStudents()
    this.filteredStudents = [...this.students];
  }

  filterStudents(): void {
    this.filteredStudents = this.students.filter(
      (student) =>
        student.Name.includes(this.searchQuery) ||
        student.Surname.includes(this.searchQuery)
    );
  }

  removeStudent(studentToRemove: any): void {
    this.students = this.students.filter(
      (student) => student !== studentToRemove
    );
    this.saveStudents()
    this.filteredStudents = [...this.students];
  }

  editStudentValue(student: StudentModel): void {
    if(this.editedStudent==null){
      student.editing = !student.editing;
      this.editedStudent = { ...student };
      const updatedStudents = this.students.filter(
        (st) => st.Name !== student.Name || st.Surname !== student.Surname
      );
      this.getAllStudentsNames = this.getNamesAndSurnames(updatedStudents);

    }

  }

  getNamesAndSurnames(students: StudentModel[]): string[] {
    return students.map(
      (student) => `${student.Name} ${student.Surname}`
    );
  }
  addStudentClick():void{
    if(this.editedStudent==null){
      this.getAllStudentsNames = this.getNamesAndSurnames(this.students);
      this.addingStudent=true;
    }

  }
  onStudentEdit($event: StudentModel, student: StudentModel): void {
    this.editedStudent=null;
    $event.editing = false;
    this.students[this.students.indexOf(student)] = $event;
    this.saveStudents()
    this.filteredStudents = [...this.students];

  }
  onStudentAdd($event:StudentModel){
    this.students.push($event)
    this.saveStudents()
    this.filteredStudents = [...this.students];
    this.addingStudent=false;
    
  }
}
