import { LlImageService } from '../../../services/ll-image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocab-builder-set',
  templateUrl: './vocab-builder-set.component.html',
  styleUrls: ['./vocab-builder-set.component.scss']
})
export class VocabBuilderSetComponent implements OnInit {

  panelOpenState = false;
  count = 2;
  imageUrlsVerbs: string[];
  imageUrlsNouns: string[];

  constructor(private imageService: LlImageService) { }

  ngOnInit(): void {
    this.getRandomImages('nouns');
    this.getRandomImages('verbs');
  }

  getRandomImages(category: string): void{
    console.log('Calling AWS for images');
    this.imageService.getRandomImageUrls(this.count, category).subscribe(response => {
      if ( category.includes('nouns') ){
        this.imageUrlsNouns = response.imageUrls;
      } else if ( category.includes('verbs') ){
        this.imageUrlsVerbs = response.imageUrls;
      }
    }, err => console.log('HTTP Error', err));
  }

}
