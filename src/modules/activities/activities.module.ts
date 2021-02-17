import { SortingModule } from './sorting/sorting.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:  [  VocabularyModule, SortingModule ]
})
export class ActivitiesModule { }
