import { Pipe, PipeTransform } from '@angular/core';
import { sortAscendingPriority } from '@angular/flex-layout';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(value: Array<any>, args: any): any {
    // return value.sort((a: any, b: any) => {
    //   let x = a.name.toLowerCase();
    //   let y = b.name.toLowerCase();
    //   if (x < y) {
    //     return "-1";
    //   }
    //   else {
    //     return 1;
    //   }
    //   return 0;
    // })
  }

}
