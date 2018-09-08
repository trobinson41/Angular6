import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from "../../../node_modules/rxjs";
import { Recipe } from "../recipes/recipe.model";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {
    storeSubscription: Subscription;

    constructor(private dataStorageService: DataStorageService) {

    }

    ngOnInit() {
        this.onFetchData();
    }

    onSaveData() {
        this.storeSubscription = this.dataStorageService.storeRecipes()
            .subscribe(
                (response) => alert('Recipes saved!'),
                (error) => alert('Error saving recipes: ' + error)
            );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    ngOnDestroy() {
        this.storeSubscription.unsubscribe();
    }
}