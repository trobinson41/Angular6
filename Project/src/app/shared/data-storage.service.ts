import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';
import 'rxjs';
import { map } from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams, HttpRequest } from '../../../node_modules/@angular/common/http';

@Injectable()
export class DataStorageService {
  signedIn: boolean = false;

  constructor(private httpClient: HttpClient, private recipeService: RecipesService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();

    // return this.httpClient.put(
    //   'https://ng-recipe-book-faea8.firebaseio.com/recipes.json', 
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //   }
    // );
    const req = new HttpRequest(
      'PUT', 
      'https://ng-recipe-book-faea8.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true
      }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-faea8.firebaseio.com/recipes.json?auth=' + token).pipe(
    //   map(
    //     (recipes) => {
    //       for (let recipe of recipes) {
    //         if (!recipe['ingredients']) {
    //           recipe['ingredients'] = [];
    //         }
    //       }
    //       return recipes;
    //     }
    //   )
    // )

    this.httpClient.get<Recipe[]>('https://ng-recipe-book-faea8.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    }).pipe(
      map(
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
