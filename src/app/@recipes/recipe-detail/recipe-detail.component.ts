import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styles: []
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    recipeId: number;
    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.recipeId = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.recipeId);
        });
    }
    onAddShopList = () => {
        this.recipeService.addIngToShopList(this.recipe.ingredients);
    }
}
