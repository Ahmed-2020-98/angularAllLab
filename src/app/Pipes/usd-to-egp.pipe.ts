import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGP'
})
export class UsdToEgpPipe implements PipeTransform {

  transform(value: number,currentRate:number=20): number {
    // return value * 20;
    return value * currentRate;
  }

}
