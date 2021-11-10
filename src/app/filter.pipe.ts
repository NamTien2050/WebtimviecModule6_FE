import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string, items: any[], prop: string): any[] {
    if (!items) return [];
    if (!value) return items;
    return items.filter(singleItem => singleItem[prop].toLowerCase().startsWith(value.toLowerCase()));
  }

}
