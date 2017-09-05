export class User {
  email: string;
  password: string;
  birthDate: number;
  gender: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
  id: number;

  constructor(payload: any) {
    this.email = payload.email;
    this.password = payload.password;
    this.birthDate = payload.birthDate;
    this.gender = payload.gender;
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.address = payload.address;
    this.city = payload.city;
    this.phone = payload.phone;
    this.id = payload.id;
  }

  public getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

}
