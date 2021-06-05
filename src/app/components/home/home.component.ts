import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trackingCode = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next(): void {
    this.router.navigate(['/track/'+ this.trackingCode]);
  }

  get isValid(): boolean {
    if (this.trackingCode.length === 13){
      return true;
    }
    return false;
  }
}
