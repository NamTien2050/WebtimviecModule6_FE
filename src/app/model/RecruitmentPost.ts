export class RecruitmentPost {
  id: any;
  title: any;
  minSalary: any;
  maxSalary: any;
  quantity: any;
  gender: any;
  skill: any;
  workType: any;
  position: any;
  experience:any;
  date: any;
  field: any;
  location: any;
  status: any;

  // constructor(title: string, quantity: number, position: string, experience: string, date: any, status: any) {
  //   this.title = title;
  //   this.quantity = quantity;
  //   this.position = position;
  //   this.experience = experience;
  //   this.date = date;
  //   this.status = status;
  // }


  constructor(id: any, title: any, minSalary: any, maxSalary: any, quantity: any, gender: any, skill: any, workType: any, position: any, experience: any, date: any, field: any, location: any, status: any) {
    this.id = id;
    this.title = title;
    this.minSalary = minSalary;
    this.maxSalary = maxSalary;
    this.quantity = quantity;
    this.gender = gender;
    this.skill = skill;
    this.workType = workType;
    this.position = position;
    this.experience = experience;
    this.date = date;
    this.field = field;
    this.location = location;
    this.status = status;
  }
}
