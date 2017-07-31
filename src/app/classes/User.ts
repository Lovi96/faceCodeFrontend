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

  constructor(email: string, password: string, yearOfBirth: number, gender: string, firstName: string,
              lastName: string, address: string, city: string, phone: string) {
    this.email = email;
    this.password = password;
    this.birthDate = yearOfBirth;
    this.gender = gender;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.phone = phone;
  }

  // toString(): String{
  //   return this.email;
  // }

}
