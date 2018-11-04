import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
   private recipes: Recipe[] = [
      new Recipe(
         1,
         'A test recipe',
         'This is the simple test desc',
         '/assets/images/image1.jpg',
         [new Ingredient('Meat', 1), new Ingredient('Domato', 2)]
      ),
      new Recipe(
         2,
         'B test recipe',
         'This is the simple test desc',
         '/assets/images/image1.jpg',
         [new Ingredient('Meat', 1), new Ingredient('Domato', 2)]
      ),
      new Recipe(
         3,
         'C test recipe',
         'This is the simple test desc',
         '/assets/images/image1.jpg',
         [new Ingredient('Meat', 1), new Ingredient('Domato', 2)]
      )
   ];

   constructor(private slService: ShoppingListService) {}

   getRecipes = () => {
      return [...this.recipes];
   }
   getRecipe = id => {
      return this.recipes.find(item => item.id === id);
   }

   addIngToShopList = (ingredients: Ingredient[]) => {
      this.slService.addIngredients(ingredients);
   }
}
