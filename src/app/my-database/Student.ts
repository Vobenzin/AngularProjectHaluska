export class StudentModel {
  editing: Boolean = false;
  constructor(
    public Name: string,
    public Surname: string,
    public BirthDate: string,
    public GPA: number,
    public Class: string,
    public Department: string,
    public Sex: string,
    public Info: string,
    public Disabled: boolean,
    public LastEdit: string
  ) {}
}
