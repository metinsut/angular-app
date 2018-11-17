import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailDefaultComponent } from './recipe-detail-default/recipe-detail-default.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const routes: Routes = [
   {
      path: '',
      component: RecipesComponent,
      children: [
         { path: '', component: RecipeDetailDefaultComponent },
         { path: 'new', component: RecipeEditComponent },
         { path: ':id', component: RecipeDetailComponent },
         { path: ':id/edit', component: RecipeEditComponent }
      ]
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RecipesRoutingModule { }
