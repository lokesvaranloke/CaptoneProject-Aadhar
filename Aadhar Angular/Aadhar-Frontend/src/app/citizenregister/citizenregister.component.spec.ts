import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenregisterComponent } from './citizenregister.component';

describe('CitizenregisterComponent', () => {
  let component: CitizenregisterComponent;
  let fixture: ComponentFixture<CitizenregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
