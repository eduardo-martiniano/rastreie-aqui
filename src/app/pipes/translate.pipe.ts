import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var status = "TRANSITO";

    switch (value) {
      case ("POSTED"):
        status = "POSTADO";
        break;

      case ("TRANSIT"):
        status = "TRANSITO";
        break;

      case ("ARRIVED-DESTINATION"):
        status = "TRANSITO";
        break;

      case ("PICKUP"):
        status = "SAIU P/ ENTREGA";
        break;

      case ("DELIVERED"):
        status = "ENTREGUE";
        break;
    }
    return status;
  }

}
