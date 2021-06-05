import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  baseUrl = "https://api.melhorrastreio.com.br/api/v1/trackings"

  constructor(private http: HttpClient) { }

  find(code: any): Promise<any> {
    return new Promise((resolve, reject) => {
       this.http.get<any>(this.baseUrl + "/" + code).subscribe(
         result => resolve(result),
         error => reject(error));
    });
  }
}
