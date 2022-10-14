import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenhomeComponent } from './citizenhome.component';

describe('CitizenhomeComponent', () => {
  let component: CitizenhomeComponent;
  let fixture: ComponentFixture<CitizenhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
