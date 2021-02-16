import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/models/order.model';
import { Package } from 'src/models/package.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  baseUrl = "https://api-track.ebanx.com/production/track"

  constructor(private http: HttpClient) { }

  find(order: Order): Observable<Package[]> {
    return this.http.post<any>(this.baseUrl, order);
  }
}
