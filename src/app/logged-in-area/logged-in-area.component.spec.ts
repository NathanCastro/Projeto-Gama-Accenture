import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInAreaComponent } from './logged-in-area.component';

describe('LoggedInAreaComponent', () => {
  let component: LoggedInAreaComponent;
  let fixture: ComponentFixture<LoggedInAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
