export class SignUpModel {

    constructor(
      public firstName: string,
      public surname: string,
      public email: string,
      public password: string,
      public confirmPassword: string
    ){ }
  
  }