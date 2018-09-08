import { Component, OnInit, OnDestroy } from "@angular/core"
import { RecipesService } from "../recipes/recipes.service";
import { Subscription } from "../../../node_modules/rxjs";
import { Recipe } from "../recipes/recipe.model";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {
    storeSubscription: Subscription;
    fetchSubscription: Subscription;

    constructor(private recipesService: RecipesService) {

    }

    ngOnInit() {
        this.onFetchData();
    }

    onSaveData() {
        this.storeSubscription = this.recipesService.storeRecipes()
            .subscribe(
                (response) => alert('Recipes saved!'),
                (error) => alert('Error saving recipes: ' + error)
            );
    }

    onFetchData() {
        this.fetchSubscription = this.recipesService.fetchRecipes()
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipesService.setRecipes(recipes);
                }
            );
    }

    ngOnDestroy() {
        this.storeSubscription.unsubscribe();
        this.fetchSubscription.unsubscribe();
    }
}