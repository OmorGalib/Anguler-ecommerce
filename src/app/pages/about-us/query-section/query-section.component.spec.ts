import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerySectionComponent } from './query-section.component';

describe('QuerySectionComponent', () => {
  let component: QuerySectionComponent;
  let fixture: ComponentFixture<QuerySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuerySectionComponent]
    });
    fixture = TestBed.createComponent(QuerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});