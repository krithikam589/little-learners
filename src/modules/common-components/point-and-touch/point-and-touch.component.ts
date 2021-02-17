import { LlSoundEffectService } from './../../services/ll-sound-effect.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-point-and-touch',
  templateUrl: './point-and-touch.component.html',
  styleUrls: ['./point-and-touch.component.scss']
})
export class PointAndTouchComponent implements OnInit, OnChanges {
  @Input() imageUrls: string[];
  selectedPictureIndex: number;
  primary: string;
  @Output() nextClick = new EventEmitter();
  navigationDisabled = true;

  constructor(private soundEffect: LlSoundEffectService) {
  }

  ngOnInit(): void {
    this.selectedPictureIndex = -1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.imageUrls){
      const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
      this.primary = this.imageUrls[randomIndex].substring(
          this.imageUrls[randomIndex].lastIndexOf('/') + 1,
          this.imageUrls[randomIndex].lastIndexOf('.'));
    }
  }

  selectImage(i: number): void {
    this.selectedPictureIndex = i;
    if (this.imageUrls[i].includes(this.primary)){
      this.soundEffect.playAppreciationPhrase();
      this.navigationDisabled = false;
    }else{
      this.navigationDisabled = true;
    }
  }

  getNext(): void{
    this.nextClick.emit();
    this.selectedPictureIndex = -1;
    this.navigationDisabled = true;
  }

}
