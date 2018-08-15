import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styles: [`
        .blueAndWhite {
            background-color: blue;
            color: white;
        }`
    ]
})
export class DetailsComponent implements OnInit {
    detailsVisible = false;
    numberOfClicks = 0;
    clickArray: string[] = [];

    constructor() {

    }

    ngOnInit() {

    }

    onDisplayDetails() {
        this.detailsVisible = !this.detailsVisible;
        var button1 = document.getElementById('DetailsButton');
        button1.innerText = this.detailsVisible ? 'Hide Details' : 'Display Details';
        this.numberOfClicks += 1;
        this.clickArray.push(this.numberOfClicks.toString() + ": " + new Date().toLocaleString());
    }
}