import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface SortType {
  id: string;
  displayValue: string;
}

interface SortCategory {
  id: string;
  displayValue: string;
}

interface DialogData {
  imageUrls: string[];
}

@Component({
  selector: 'app-sort-and-group',
  templateUrl: './sort-and-group.component.html',
  styleUrls: ['./sort-and-group.component.scss']
})
export class SortAndGroupComponent {

  sorterCriteriaForm = new FormGroup({
    type: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  types: SortType[] = [{  id: 'identical', displayValue: 'Identical'  },
                       {  id: 'non-identical', displayValue: 'Non-Identical'  },
                       {  id: 'category', displayValue: 'Category' }];

  categories: SortCategory[] = [{ id: 'shapes', displayValue: 'Shapes'},
                                { id: 'colors', displayValue: 'Colors'},
                                { id: 'vegetables', displayValue: 'Vegetables'},
                                { id: 'alphabets', displayValue: 'Alphabets'},
                                { id: 'numbers', displayValue: 'Numbers'},
                                { id: 'fruits', displayValue: 'Fruits'},
                                { id: 'animals', displayValue: 'Animals'},
                                { id: 'vehicles', displayValue: 'Vehicles'},
                                { id: 'utensils', displayValue: 'Utensils'},
                                { id: 'birds', displayValue: 'Birds'},
                                { id: 'insects', displayValue: 'Insects'},
                                { id: 'food', displayValue: 'Food'}];

  navigationDisabled = true;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SorterDialogComponent, {
      width: '100%',
      data: {
        imageData: [{ url: 'https://littlelearnersimages.s3.amazonaws.com/nouns/Tree.jpg', category: 'group1' },
        { url: 'https://littlelearnersimages.s3.amazonaws.com/nouns/Down.png', category: 'group2' },
        { url: 'https://littlelearnersimages.s3.amazonaws.com/nouns/Tree.jpg', category: 'group1' },
        { url: 'https://littlelearnersimages.s3.amazonaws.com/nouns/Down.png', category: 'group2' }]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-sorter-dialog',
  templateUrl: 'sorter-dialog.component.html'
})
export class SorterDialogComponent {

  answerHolderConfig1: any =  { boundaryHeight: '300', boundaryWidth: '400',
                               itemHolderHeight: '100', itemHolderWidth: '100',
                               id: 'group1', connectedTo: ['group2', 'set-given']};

  answerHolderConfig2: any =  { boundaryHeight: '300', boundaryWidth: '400',
                               itemHolderHeight: '100', itemHolderWidth: '100',
                               id: 'group2', connectedTo: ['group1', 'set-given']};

  questionHolderConfig: any =  { boundaryHeight: '140', boundaryWidth: '700',
                                 itemHolderHeight: '100', itemHolderWidth: '100',
                                 id: 'set-given', connectedTo: ['group1', 'group2']};
  constructor(
    public dialogRef: MatDialogRef<SorterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
