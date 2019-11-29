import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  registerform: FormGroup;
  submitted = true;
  emailRegex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerform = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      email:    ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      company:  ['', [Validators.required, Validators.pattern('^[A-Za-z0-9_ ]+$')]],
      subject:  ['', [Validators.required, Validators.maxLength(32)]],
      message:  ['', [Validators.required, Validators.minLength(30), Validators.maxLength(150)]]
    });
  }
  onSubmit() {
    if (this.registerform.valid) {
      alert('Contact form has been submitted successfully.');
      alert(JSON.stringify(this.registerform.value));
      this.registerform.reset();
    }
  }
  get f() {
    return this.registerform.controls;
  }
}
