import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';

interface LLDNDConfig{
  boundaryHeight: string;
  boundaryWidth: string;
  itemHolderHeight: string;
  itemHolderWidth: string;
  lockAxis: string;
  id: string;
  connectedTo: string[];
}

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})

export class DragAndDropComponent implements OnInit {

  @Input() dndData: any;
  @Input() configData: LLDNDConfig;

  constructor() {
    //this.dndData = {imageData: []};
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void{
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  isDropAllowed(item: CdkDrag<any>, drop: CdkDropList): boolean{
    if (item.dropContainer.data[item.element.nativeElement.id].group.includes(drop.id) ){
      return true;
    }
    return false;
  }

}
