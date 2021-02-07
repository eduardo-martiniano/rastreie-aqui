import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CheckpointService } from 'src/app/checkpoint.service';
import { Checkpoint } from 'src/models/checkpoint.model';
import { Order } from 'src/models/order.model';
import { Package } from 'src/models/package.model';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.css']
})
export class CheckpointComponent implements OnInit {

  package!: Package;
  checkpoints!: Checkpoint[]

  form: FormGroup

  constructor(private checkpointService: CheckpointService) {
      this.form = new FormGroup({
      trackingCode: new FormControl('LB970787297SE'),
      locale: new FormControl('pt'),
    })
  }

  ngOnInit(): void {
   // this.getCheckpoints();
  }

  getCheckpoints(): void{
    const order = this.form.value as Order
    this.checkpointService.find(order).subscribe( result =>{
      this.package = result[0]
      this.checkpoints = this.package.checkpoints
    })
  }

}
