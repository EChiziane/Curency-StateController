export class LoginCredential {
  constructor(public email: string, public password: string) {
  }
}

export class LoginResponse {
  constructor(public email: string, public fullName: string, public token: string) {
  }
}
