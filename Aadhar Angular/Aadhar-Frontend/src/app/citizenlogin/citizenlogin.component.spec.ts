import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenloginComponent } from './citizenlogin.component';

describe('CitizenloginComponent', () => {
  let component: CitizenloginComponent;
  let fixture: ComponentFixture<CitizenloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
