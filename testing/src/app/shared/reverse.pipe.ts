import { Pipe } from "../../../node_modules/@angular/core";

@Pipe({
    name: 'reverse'
})
export class ReversePipe{
    transform(value: string) {
        return value.split('').reverse().join('');
    }
}