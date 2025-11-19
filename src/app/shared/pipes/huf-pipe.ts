import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'huf',
})
export class HufPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const characters = value
      .toString()
      .split('')
      .reverse()
      .map((ch, index) => {
        if (index % 3 == 0) {
          return ch + ' ';
        }
        return ch;
      });

    return characters.reverse().join('') + ' Ft';
  }
}
