import { SortingBundleComponent } from './../modules/activities/sorting/sorting-bundle/sorting-bundle.component';
import { VocabBuilderSetComponent } from './../modules/activities/vocabulary/vocab-builder-set/vocab-builder-set.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'vocab-builder', component: VocabBuilderSetComponent},
  { path: 'sorting', component: SortingBundleComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
