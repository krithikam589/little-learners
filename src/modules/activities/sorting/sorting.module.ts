import { CommonComponentsModule } from './../../common-components/common-components.module';
import { ServicesModule } from './../../services/services.module';
import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingBundleComponent } from './sorting-bundle/sorting-bundle.component';



@NgModule({
  declarations: [SortingBundleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CommonComponentsModule,
    ServicesModule
  ]
})
export class SortingModule { }
