import { Checkpoint } from "./checkpoint.model";

export interface Package {
  checkpoints: Checkpoint[]
  daysInTransit?: number
  origin?: string
  destination?: string
  deliveryProgress?: string
  status?: string
}
