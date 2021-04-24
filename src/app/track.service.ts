import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { Order } from 'src/models/order.model';
import { Package } from 'src/models/package.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  baseUrl = "https://api-track.ebanx.com/production/track"

  constructor(private http: HttpClient) { }

  find(order: Order): Promise<any> {
    return new Promise((resolve, reject) => {
       this.http.post<any>(this.baseUrl, order).subscribe(
         result => resolve(result),
         () => reject(400));
    });
  }
}
