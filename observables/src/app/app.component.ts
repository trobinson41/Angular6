import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Activated = false;
  user2Activated = false;
  userSubscription: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.userSubscription = this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1)
          this.user1Activated = true;
        else if (id === 2)
          this.user2Activated = true;
      }
    )
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
