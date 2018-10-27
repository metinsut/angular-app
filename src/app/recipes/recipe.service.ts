import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'This is the simple test desc',
            '/assets/images/image1.jpg',
            [new Ingredient('Meat', 1), new Ingredient('Domato', 2)]
        ),
        new Recipe(
            'B test recipe',
            'This is the simple test desc',
            '/assets/images/image1.jpg',
            [new Ingredient('Meat', 1), new Ingredient('Domato', 2)]
        ),
        new Recipe(
            'C test recipe',
            'This is the simple test desc',
            '/assets/images/image1.jpg',
            [new Ingredient('Meat', 1), new Ingredient('Domato', 2)]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipe = () => {
        return [...this.recipes];
    }

    addIngToShopList = (ingredients: Ingredient[]) => {
        console.log(ingredients);
        this.slService.addIngredients(ingredients);
    }
}
