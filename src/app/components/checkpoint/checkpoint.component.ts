import { Component, OnInit } from '@angular/core';
import { Checkpoint } from 'src/models/checkpoint.model';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.css']
})
export class CheckpointComponent implements OnInit {

   checkpoint: Checkpoint = {
    Date: "22/01/2021",
    Description: "Encomenda encaminhada",
    Destination: "CTC RECIFE - JABOATAO DOS GUARARAPES/PE - Brasil",
    Details: "CTE CAJAMAR - CAJAMAR/SP - Brasil",
    OriginalDescription: "Encomenda encaminhada",
    OriginalDestination: "CTC RECIFE - JABOATAO DOS GUARARAPES/PE - Brasil",
    OriginalDetails: "CTE CAJAMAR - CAJAMAR/SP - Brasil",
    OriginalExtraInformation: "",
    PickupAddress: "",
    Status: "TRANSIT"
  }

  constructor() { }

  ngOnInit(): void {

  }

}
