import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabBuilderSetComponent } from './vocab-builder-set.component';

describe('VocabBuilderSetComponent', () => {
  let component: VocabBuilderSetComponent;
  let fixture: ComponentFixture<VocabBuilderSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabBuilderSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabBuilderSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
