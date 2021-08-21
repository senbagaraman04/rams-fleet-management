import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourCardSectionComponent } from './four-card-section.component';

describe('FourCardSectionComponent', () => {
  let component: FourCardSectionComponent;
  let fixture: ComponentFixture<FourCardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourCardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
