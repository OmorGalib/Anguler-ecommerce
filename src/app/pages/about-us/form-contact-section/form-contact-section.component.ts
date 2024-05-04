import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-contact-section',
  templateUrl: './form-contact-section.component.html',
  styleUrls: ['./form-contact-section.component.scss'],
})
export class FormContactSectionComponent {
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
      subject: null,
    });
  }
  onSubmit() {
    console.log('formData:', this.formData.value);
    this.formData.reset();
  }
}
