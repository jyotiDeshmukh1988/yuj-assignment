import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  contactForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),

    phonenumber: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
