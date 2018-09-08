import { PipeTransform, Pipe } from "../../node_modules/@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, length: number) {
         if (value.length > length) {
            return value.substr(0, length) + '...';
        }
        return value;
    }
}