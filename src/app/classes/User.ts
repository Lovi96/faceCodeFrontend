export class User {
  email: String;
  password: String;
  birthDate: number;
  gender: String;
  firstName: String;
  lastName: String;
  address: String;
  city: String;
  phone: String;

  constructor(email: String, password: String, yearOfBirth: number, gender: String, firstName: String,
              lastName: String, address: String, city: String, phone: String) {
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
}
