export class LoginCredentials {

  email: string;
  password: string;

  constructor(email: string, pw: string) {
    this.email = email;
    this.password = pw;
  }
}
