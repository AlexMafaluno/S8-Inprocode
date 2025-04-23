import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padZero',
  standalone: true
})
export class PadZeroPipe implements PipeTransform {

  transform(value: number | string, size: number = 3): string {
    if (value == null) return '';
    return value.toString().padStart(size, '0');
  }

}
