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
    if (this.address === null) {
      this.address = "Not specified";
    }
    this.city = payload.city;
    if (this.city === null) {
      this.city = "Not specified";
    }
    this.phone = payload.phone;
    if (this.phone === null) {
      this.phone = "Not specified";
    }
    this.id = payload.id;
  }

  public getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

}
