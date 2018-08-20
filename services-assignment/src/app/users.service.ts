import { OnInit, Injectable } from "../../node_modules/@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService implements OnInit {
    users: {name: string, active: boolean}[] = [
        {name: 'Max', active: true},
        {name: 'Anna', active: true},
        {name: 'Chris', active: false},
        {name: 'Manu', active: false}
    ]

    constructor(private counterService: CounterService) {

    }

    ngOnInit() {
    }

    setActive(id: number, active: boolean) {
        this.users[id].active = active;
        if (active)
            this.counterService.toActive += 1;
        else
            this.counterService.toInactive +=1;
        console.log('Inactive to active: ' + this.counterService.toActive + '\nActive to inactive: ' + this.counterService.toInactive);
    }
}