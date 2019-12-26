import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {reduce} from 'rxjs/operators';
import {colors} from '@angular/cli/utilities/color';
import {isBoolean} from 'util';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  registerform: FormGroup;
  submitted = true;
  isChecked: boolean;
  userValue: string;
  emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.registerform = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      company: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9_ ]+$')]],
      subject: ['', [Validators.required, Validators.maxLength(32)]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(150)]],
      Termsconditions: [false, [Validators.requiredTrue]]
    });
    // document.getElementById('username').addEventListener('change', this.worldMarch);
  }

  onSubmit() {
    if (this.registerform.valid) {
      alert('Contact form has been submitted successfully.');
      console.log(JSON.stringify(this.registerform.value, null, 4));
      this.registerform.reset();
      this.isChecked = isBoolean();
    }
  }

  get f() {
    return this.registerform.controls;
  }
  checked() {
     this.isChecked = !this.isChecked;
  }
  getColor() {
    const checkBox = this.registerform.controls.Termsconditions;
    if (this.isChecked === true) {
        return 'green';
      } else if (this.isChecked === false) {
        return 'red';
      } else if (this.isChecked === undefined) {
      return '#4a4949';
    }
  }
  match() {
    const restrictWord = ['dev', 'fool', 'test'];
    for (const word of restrictWord) {
      if (this.userValue) {
        if (this.userValue.toLowerCase().match(word)) {
          this.userValue = '';
        }
      }
    }
  }
}
