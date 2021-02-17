import { ServicesModule } from '../../services/services.module';
import { CommonComponentsModule } from '../../common-components/common-components.module';
import { MaterialModule } from '../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabBuilderSetComponent } from './vocab-builder-set/vocab-builder-set.component';

@NgModule({
  declarations: [VocabBuilderSetComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CommonComponentsModule,
    ServicesModule
  ]
})
export class VocabularyModule { }
