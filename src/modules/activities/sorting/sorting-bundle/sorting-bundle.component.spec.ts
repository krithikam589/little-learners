import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingBundleComponent } from './sorting-bundle.component';

describe('SortingBundleComponent', () => {
  let component: SortingBundleComponent;
  let fixture: ComponentFixture<SortingBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingBundleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
