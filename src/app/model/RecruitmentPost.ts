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
  description: any;
  expectation: any
  status: any;
  appUser: any;

  constructor(title: any, minSalary: any, maxSalary: any, quantity: any, gender: any, skill: any, workType: any, position: any, experience: any, date: any, field: any, location: any, description:any,expectation:any, status: any, appUser: any) {
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
    this.description = description;
    this.expectation = expectation;
    this.status = status;
    this.appUser = appUser;
  }
}
