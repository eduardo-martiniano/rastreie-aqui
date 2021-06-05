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
  error = false;

  constructor(private route: ActivatedRoute, private trackService: TrackService) { }

  ngOnInit(): void {
    this.route.params.subscribe(order => {
      this.code = order.code;
    });

    this.trackService.find(this.code).then(response => {
      if (response.success) {
        this.eventsList = response.data.events.reverse();
      }
      else { this.error = true; }
      this.loading = false;

    }).catch(() => {
      this.error = true;
      this.loading = false;
    });
  }

}
