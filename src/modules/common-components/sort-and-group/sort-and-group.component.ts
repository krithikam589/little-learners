import { LlImageService } from './../../services/ll-image.service';
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
    categorySingleValue: new FormControl({value: '', disabled: true}, Validators.required),
    categoryMultiValue: new FormControl({value: '', disabled: true}, Validators.required),
  });

  MAX_IMAGES_TO_SORT = 10;

  types: SortType[] = [{  id: 'identical', displayValue: 'Identical'  },
                       {  id: 'non-identical', displayValue: 'Non-Identical'  },
                       {  id: 'category', displayValue: 'Category' }];

  categories: SortCategory[] = [{ id: 'shapes', displayValue: 'Shapes'},
                                { id: 'fruits', displayValue: 'Fruits'},
                                { id: 'vegetables', displayValue: 'Vegetables'}/*,
                                { id: 'colors', displayValue: 'Colors'},
                                { id: 'alphabets', displayValue: 'Alphabets'},
                                { id: 'numbers', displayValue: 'Numbers'},
                                { id: 'animals', displayValue: 'Animals'},
                                { id: 'vehicles', displayValue: 'Vehicles'},
                                { id: 'utensils', displayValue: 'Utensils'},
                                { id: 'birds', displayValue: 'Birds'},
                                { id: 'insects', displayValue: 'Insects'},
                                { id: 'food', displayValue: 'Food'}*/];

  navigationDisabled = true;
  enableMultiselect = false;

  constructor(public dialog: MatDialog, private imageService: LlImageService) {}

  openDialog(): void {
    const sortType = this.sorterCriteriaForm.get('type').value;
    const subCategories = this.enableMultiselect === true ?
                                this.sorterCriteriaForm.get('categoryMultiValue').value :
                                this.sorterCriteriaForm.get('categorySingleValue').value;
    const dialogRef = this.dialog.open(SorterDialogComponent, {
      width: '100%',
      data: {
        /* imageData: [{ url: 'https://littlelearnersimages.s3.amazonaws.com/nouns/Tree.jpg', category: 'group1' },
        { url: 'https://littlelearnersimages.s3.amazonaws.com/nouns/Down.png', group: 'group2' },
        { url: 'https://littlelearnersimages.s3.amazonaws.com/nouns/Tree.jpg', group: 'group1' },
        { url: 'https://littlelearnersimages.s3.amazonaws.com/nouns/Down.png', group: 'group2' }] */
      }
    });

    if ( sortType === 'identical' ) {
      this.imageService.getImageUrlsForSortActivity(2, 'sort', null, sortType).subscribe(response => {
        let imageDataList: Array<any> = new Array();
        for ( let i = this.MAX_IMAGES_TO_SORT; i > 0; i-- ){
          let randomNum = this.randomIntFromInterval(0, 1);
          let anImageData : any = {};
          anImageData.url =  response.imageUrls[randomNum];
          anImageData.group = 'group' + (randomNum + 1).toString();
          imageDataList.push(anImageData);
        }

        dialogRef.componentInstance.imageData = imageDataList;
        console.log(dialogRef.componentInstance.imageData);
        dialogRef.componentInstance.dataLoaded = true;
      }, err => console.log('HTTP Error', err));
    }else {
      this.imageService.getImageUrlsForSortActivity(this.MAX_IMAGES_TO_SORT, 'sort', subCategories, sortType).subscribe(response => {
        let imageDataList: Array<any> = new Array();
        for ( let i = this.MAX_IMAGES_TO_SORT - 1; i >= 0; i-- ){
          let anImageData: any = {};
          anImageData.url = response.imageUrls[i];
          imageDataList.push(anImageData);
        }

        dialogRef.componentInstance.imageData = imageDataList;
        console.log(dialogRef.componentInstance.imageData);
        dialogRef.componentInstance.dataLoaded = true;
      });
    }
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  randomIntFromInterval(min, max): number{ // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onTypeValueChange(ob: any): void{
    if  ( ob.value === 'non-identical' || ob.value === 'category'){
        this.enableMultiselect = true;
        //this.sorterCriteriaForm.get('categorySingleValue').disable();
        this.sorterCriteriaForm.get('categoryMultiValue').enable();
    }else{
        this.enableMultiselect = false;
        //this.sorterCriteriaForm.get('categorySingleValue').enable();
        this.sorterCriteriaForm.get('categoryMultiValue').disable();
    }
  }

}

@Component({
  selector: 'app-sorter-dialog',
  templateUrl: 'sorter-dialog.component.html'
})
export class SorterDialogComponent {

  dataLoaded = false;

  answerHolderConfig1: any =  { boundaryHeight: '230', boundaryWidth: '400',
                               itemHolderHeight: '90', itemHolderWidth: '90',
                               id: 'group1', connectedTo: ['group2', 'set-given']};

  answerHolderConfig2: any =  { boundaryHeight: '230', boundaryWidth: '400',
                               itemHolderHeight: '90', itemHolderWidth: '90',
                               id: 'group2', connectedTo: ['group1', 'set-given']};

  questionHolderConfig: any =  { boundaryHeight: '210', boundaryWidth: '800',
                                 itemHolderHeight: '90', itemHolderWidth: '90',
                                 id: 'set-given', connectedTo: ['group1', 'group2']};

  imageData: Array<any>;
  constructor(
    public dialogRef: MatDialogRef<SorterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
