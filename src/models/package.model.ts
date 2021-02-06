import { Checkpoint } from "./checkpoint.model";

export interface Package {
  checkpoints: Checkpoint[]
  DaysInTransit?: number
  Origin?: string
  Destination?: string
}
