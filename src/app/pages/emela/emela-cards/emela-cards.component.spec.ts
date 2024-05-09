import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmelaCardsComponent } from './emela-cards.component';

describe('EmelaCardsComponent', () => {
  let component: EmelaCardsComponent;
  let fixture: ComponentFixture<EmelaCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmelaCardsComponent]
    });
    fixture = TestBed.createComponent(EmelaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
