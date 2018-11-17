import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailDefaultComponent } from './recipe-detail-default/recipe-detail-default.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
   declarations: [
      RecipesComponent,
      RecipeDetailDefaultComponent,
      RecipeEditComponent,
      RecipeDetailComponent,
      RecipeListComponent,
      RecipeItemComponent
   ],
   imports: [
      CommonModule,
      RecipesRoutingModule,
      SharedModule
   ]
})


export class RecipesModule { }
