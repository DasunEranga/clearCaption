import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercase'
})
export class LowercasePipe implements PipeTransform {

  transform(input:string): string{
        if (!input) {
            return '';
        } else {
            return input.replace(/\w\S*/g, (txt => txt.toLowerCase() ));
        }
    }

}
