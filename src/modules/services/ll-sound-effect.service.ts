import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class LlSoundEffectService {

  constructor() { }

  playAppreciationPhrase(): any{
    const response = new Howl({ src: 'https://littlelearnersaudios.s3.amazonaws.com/Good+Job+You+did+it.mp3',
                              html5: true });
    response.play();
  }

}
