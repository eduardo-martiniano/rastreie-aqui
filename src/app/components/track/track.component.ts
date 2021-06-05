import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackService } from 'src/app/track.service';
import { EventOrder } from 'src/models/event.mode';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  eventsList!: EventOrder[];
  code: any;
  loading = true;

  constructor(private route: ActivatedRoute, private trackService: TrackService) { }

  ngOnInit(): void {
    this.route.params.subscribe(order => {
      this.code = order.code;
    });

    this.trackService.find(this.code).then(response => {
      this.eventsList = response.data.events.reverse();
      this.loading = false;
    });
  }

}
