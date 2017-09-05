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
  private default : string = "Not specified";

  constructor(payload: any) {
    this.email = payload.email;
    this.password = payload.password;
    this.birthDate = payload.birthDate;
    this.gender = payload.gender;
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.address = payload.address;
    if (this.address === null)
    {
      this.address = this.default;
    }
    this.city = payload.city;
    if (this.city === null)
    {
      this.city = this.default;
    }
    this.phone = payload.phone;
    if(this.phone === null)
    {
      this.phone = this.default
    }
    this.id = payload.id;
  }

  public getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

}
