import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TrackService } from 'src/app/track.service';
import { Checkpoint } from 'src/models/checkpoint.model';
import { Order } from 'src/models/order.model';
import { Package } from 'src/models/package.model';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  package!: Package;
  checkpoints!: Checkpoint[];
  loading: boolean = true;
  form!: FormGroup

  constructor(private checkpointService: TrackService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((code: any) => {
      this.form = new FormGroup({
        trackingCode: new FormControl(code.code),
        locale: new FormControl('pt'),
      });
    });
    this.getCheckpoints();
    this.loading = false;
  }

  getCheckpoints(): boolean {
    const order = this.form.value as Order
    this.checkpointService.find(order).subscribe(result =>{
      this.package = result[0];
      this.checkpoints = this.package.checkpoints.reverse();
      return true;
    });
    return false;
  }

   get isUndefined(): boolean {
    return this.package === undefined;
  }

}