import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/models/order.model';
import { TrackComponent } from '../track/track.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  order: Order = {
    TrackingCode: "",
    locale: "pt"
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next(): void {
    this.router.navigate(['/track/'+ this.order.TrackingCode])
  }

  get isValid(): boolean {
    if (this.order.TrackingCode.length === 13){
      return true;
    }
    return false;
  }
}
