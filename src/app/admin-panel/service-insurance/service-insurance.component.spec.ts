import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInsuranceComponent } from './service-insurance.component';

describe('ServiceInsuranceComponent', () => {
  let component: ServiceInsuranceComponent;
  let fixture: ComponentFixture<ServiceInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
