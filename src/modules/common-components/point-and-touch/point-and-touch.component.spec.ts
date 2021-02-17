import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointAndTouchComponent } from './point-and-touch.component';

describe('PointAndTouchComponent', () => {
  let component: PointAndTouchComponent;
  let fixture: ComponentFixture<PointAndTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointAndTouchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointAndTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
