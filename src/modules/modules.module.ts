import { ServicesModule } from './services/services.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { ActivitiesModule } from './activities/activities.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ActivitiesModule, CommonComponentsModule, ServicesModule]
})
export class ModulesModule {}
