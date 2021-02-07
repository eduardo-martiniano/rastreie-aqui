import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  form!: FormGroup

  constructor(private checkpointService: CheckpointService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((code: any) => {
      this.form = new FormGroup({
        trackingCode: new FormControl(code.code),
        locale: new FormControl('pt'),
      })
    })
    this.getCheckpoints();
  }

  getCheckpoints(): void{
    const order = this.form.value as Order
    this.checkpointService.find(order).subscribe( result =>{
      this.package = result[0]
      this.checkpoints = this.package.checkpoints.reverse()
    })
  }

}
