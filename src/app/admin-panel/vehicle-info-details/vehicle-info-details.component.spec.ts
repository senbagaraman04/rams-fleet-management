import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInfoDetailsComponent } from './vehicle-info-details.component';

describe('VehicleInfoDetailsComponent', () => {
  let component: VehicleInfoDetailsComponent;
  let fixture: ComponentFixture<VehicleInfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleInfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
