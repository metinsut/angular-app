import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is the simple test desc',
      '/assets/images/image1.jpg'
    ),
    new Recipe(
      'B test recipe',
      'This is the simple test desc',
      '/assets/images/image1.jpg'
    ),
    new Recipe(
      'C test recipe',
      'This is the simple test desc',
      '/assets/images/image1.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
  onRecipeSelected = (recipe: Recipe) => {
    this.recipeWasSelected.emit(recipe);
  }
}
