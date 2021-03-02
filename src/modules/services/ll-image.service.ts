import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlImageService {

  constructor(private httpClient: HttpClient) { }

  public getRandomImageUrls(count: number, category: string): Observable<any> {
    return this.httpClient.get('https://98i1hu1o6d.execute-api.us-east-1.amazonaws.com/DEV/randomimageurls?count='
                                    + count + '&category=' + category);
  }

  public getImageUrlsForSortActivity(count: number, category: string, subCategories: string, sortType: string): Observable<any> {
    return this.httpClient.get('https://98i1hu1o6d.execute-api.us-east-1.amazonaws.com/DEV/getimagesforsort?count='
                                    + count + '&category=' + category + '&subCategories=' + subCategories + '&sortType=' + sortType);
  }
}
