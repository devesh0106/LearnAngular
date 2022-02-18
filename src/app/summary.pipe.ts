import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, ...args: any[]) {
    value.substring(0,10) + '...';
    }
}