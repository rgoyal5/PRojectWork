import { Pipe, PipeTransform } from '@angular/core';
import { Plan } from '../model/plan';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(plans: Plan[], type:string): number {
    return plans.filter(c=>c.product==type).length;
  }

}
