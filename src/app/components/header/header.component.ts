import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() showBackButton = true;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.route.navigate([""]);
  }

}
