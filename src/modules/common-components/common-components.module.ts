import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointAndTouchComponent } from './point-and-touch/point-and-touch.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortAndGroupComponent, SorterDialogComponent } from './sort-and-group/sort-and-group.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PointAndTouchComponent, SortAndGroupComponent, DragAndDropComponent, SorterDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [PointAndTouchComponent, SortAndGroupComponent]
})
export class CommonComponentsModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
