import { Injectable } from "../../node_modules/@angular/core";
@Injectable({providedIn: 'root'})
export class CounterService {
    toActive = 0;
    toInactive = 0;
}