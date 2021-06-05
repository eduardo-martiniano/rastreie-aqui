import { Component, Input, OnInit } from '@angular/core';
import { EventOrder } from 'src/models/event.mode';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input()
  event!: EventOrder;
  constructor() { }

  ngOnInit(): void {
  }

}
