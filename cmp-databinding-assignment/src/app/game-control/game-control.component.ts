import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timerId: any;
  @Output() numberEmitted = new EventEmitter<number>();
  nextNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.timerId = setInterval(() => {
      this.nextNumber++;
      this.numberEmitted.emit(this.nextNumber)
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.timerId);
  }

}
