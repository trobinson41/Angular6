import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, prop?: string): any {
    if (prop === undefined) prop = 'name';
    if (value.length < 2) {
      return value;
    }
    return value.sort((a: any, b: any) => {
      if (a[prop] < b[prop]) {
        return -1;
      }
      if (a[prop] > b[prop]) {
        return 1;
      }
      return 0;
    });
  }
}
