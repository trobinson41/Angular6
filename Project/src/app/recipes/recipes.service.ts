import { EventEmitter, Output } from '../../../node_modules/@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test.', 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwifm7r3_ezcAhVOaq0KHU7gBVEQjRx6BAgBEAU&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe_logo.jpeg&psig=AOvVaw3J_cZ0OY2n0OCEWAG_-XZk&ust=1534351239258029'),
        new Recipe('Recipe 2', 'A new test.', 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwifm7r3_ezcAhVOaq0KHU7gBVEQjRx6BAgBEAU&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe_logo.jpeg&psig=AOvVaw3J_cZ0OY2n0OCEWAG_-XZk&ust=1534351239258029')
    ];

    getRecipes() {
        // Adding slice() causes the method to return a copy of the array, rather than a
        // reference to the original array.
        return this.recipes.slice();
    }
}