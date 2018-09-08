import { Injectable } from '../../../node_modules/@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject, Observable } from '../../../node_modules/rxjs';
import { Http } from '../../../node_modules/@angular/http';
import 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class RecipesService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [];
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Tasty Schnitzel', 
    //         'A super-tasty Schnitzel - just awesome!', 
    //         'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]
    //     ),
    //     new Recipe(
    //         'Angus Bacon Cheesesteak Burger', 
    //         'What else you need to say?', 
    //         'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    //         [
    //             new Ingredient('Bun', 1),
    //             new Ingredient('Steak patty', 1),
    //             new Ingredient('French Fries', 20)
    //         ]
    //     )
    // ];

    constructor(private shoppingListService: ShoppingListService, private http: Http) {}

    getRecipes() {
        // Adding slice() causes the method to return a copy of the array, rather than a
        // reference to the original array.
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        if (index < 0 || index >= this.recipes.length)
            return null;
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    storeRecipes() {
       return this.http.put('https://ng-recipe-book-faea8.firebaseio.com/recipes.json', this.recipes);
    }

    fetchRecipes() {
        return this.http.get('https://ng-recipe-book-faea8.firebaseio.com/recipes.json').pipe(
            map(
                (response: Response) => {
                    const recipes = response.json();
                    for (let recipe of this.recipes) {
                        if (!recipe.ingredients) {
                            console.log(recipe);
                            recipe.ingredients = [];
                        }
                    }
                    return recipes;
                },
                (error: Response) => {
                    alert('Error retrieving recipes');
                    return Observable.throw(error);
                }
            )
        );
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}