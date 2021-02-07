import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/models/order.model';
import { CheckpointComponent } from '../checkpoint/checkpoint.component';

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
}