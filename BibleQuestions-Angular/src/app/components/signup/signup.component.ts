import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  model = new SignUpModel("", "", "", "", "");

  submitted = false;

  onSubmit() { this.submitted = true; }
  /**
   * signUp
   */
  public signUp() : Boolean {
    return true;
  }
}

export class SignUpModel {

  constructor(
    public firstName: string,
    public surname: string,
    public email: string,
    public password: string,
    public confirmPassword: string
  ){ }

}