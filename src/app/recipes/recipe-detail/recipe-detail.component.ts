import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styles: []
})
export class RecipeDetailComponent implements OnInit {
    @Input()
    recipe: Recipe;
    constructor(private recipeService: RecipeService) {}

    ngOnInit() {}
    onAddShopList = () => {
        this.recipeService.addIngToShopList(this.recipe.ingredients);
    }
}
