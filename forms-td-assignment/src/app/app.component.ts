import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  selectedSubscription = 'Advanced';
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;
    console.log(this.signupForm.form);
  }
}
