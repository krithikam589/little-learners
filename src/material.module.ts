import {  MatListModule } from '@angular/material/list';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import {  MatButtonModule } from '@angular/material/button';
import {  MatSidenavModule  } from '@angular/material/sidenav';
import {  MatIconModule } from '@angular/material/icon';
import {  MatChipsModule } from '@angular/material/chips';
import {  MatExpansionModule } from '@angular/material/expansion';
import {  NgModule } from '@angular/core';
import {  MatCardModule } from '@angular/material/card';
import {  MatSelectModule } from '@angular/material/select';
import {  DragDropModule  } from '@angular/cdk/drag-drop';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,
    DragDropModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,
    DragDropModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  bootstrap: []
})
export class MaterialModule{
}
