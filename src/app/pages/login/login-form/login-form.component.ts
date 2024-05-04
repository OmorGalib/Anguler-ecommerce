import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  formData!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formData = this.fb.group({
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null,
    });
  }
  onSubmit() {
    console.log('formData:', this.formData.value);
    this.formData.reset();
  }
}
