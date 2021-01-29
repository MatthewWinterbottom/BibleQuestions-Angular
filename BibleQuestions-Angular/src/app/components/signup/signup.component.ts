import { Component, OnInit } from '@angular/core';
import { SignUpModel } from 'src/app/Models/SignUpModel';

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

