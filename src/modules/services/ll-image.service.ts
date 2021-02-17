import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlImageService {

  constructor(private httpClient: HttpClient) { }

  public getRandomImageUrls(count: number, category: string): Observable<any> {
    return this.httpClient.get('https://ogvt62v7zd.execute-api.us-east-1.amazonaws.com/DEV/randomimageurls?count='
                                    + count + '&category=' + category);
  }
}
