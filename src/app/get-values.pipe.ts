import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'getValues'})
export class GetValuesPipe implements PipeTransform {
    transform(map: Map<any, any>): any[] {
        let ret = [];

        map.forEach((val, key) => {
            ret.push({
                key: key,
                val: val
            });
        });

        ret.sort((a: any, b: any) => {
            if (a.val < b.val) {
              return 1;
            } else if (a.val > b.val) {
              return -1;
            } else {
              return 0;
            }
          });

        return ret.sort();
    }
}