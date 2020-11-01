import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: any[], pageSize: any | string, pageNumber: number): any[]{
    if (!array.length) return []
    if (pageSize === 'all'){
      return array
    }

    pageSize = pageSize || 8 
    pageNumber = pageNumber || 1
    -- pageNumber

    return array.slice(pageNumber * pageSize, (pageNumber + 1 ) * pageSize)
  }

}
