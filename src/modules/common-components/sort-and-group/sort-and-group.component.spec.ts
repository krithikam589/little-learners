import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAndGroupComponent } from './sort-and-group.component';

describe('SortAndGroupComponent', () => {
  let component: SortAndGroupComponent;
  let fixture: ComponentFixture<SortAndGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortAndGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortAndGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
