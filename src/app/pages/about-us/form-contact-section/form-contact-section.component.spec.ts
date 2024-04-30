import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactSectionComponent } from './form-contact-section.component';

describe('FormContactSectionComponent', () => {
  let component: FormContactSectionComponent;
  let fixture: ComponentFixture<FormContactSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContactSectionComponent]
    });
    fixture = TestBed.createComponent(FormContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
