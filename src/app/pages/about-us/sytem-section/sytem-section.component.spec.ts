import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SytemSectionComponent } from './sytem-section.component';

describe('SytemSectionComponent', () => {
  let component: SytemSectionComponent;
  let fixture: ComponentFixture<SytemSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SytemSectionComponent]
    });
    fixture = TestBed.createComponent(SytemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
