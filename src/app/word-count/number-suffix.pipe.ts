import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberSuffix' })
export class NumberSuffixPipe implements PipeTransform {
  transform(order: any): string {
    const numericValue = (order) ? parseInt(order, 10) : NaN;
    if (!isNaN(numericValue)) {
        const twoDigit = numericValue % 100;
        if (twoDigit > 9 && twoDigit < 20) {
            return order + 'th';
        }

        switch (numericValue % 10) {
            case 1:
                return order + 'st';
            case 2:
                return order + 'nd';
            case 3:
                return order + 'rd';
            default:
                return order + 'th';
        }
    }
    return order;
  }
}