import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailDefaultComponent } from './recipes/recipe-detail-default/recipe-detail-default.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   {
      path: 'recipes',
      component: RecipesComponent,
      children: [
         { path: '', component: RecipeDetailDefaultComponent },
         { path: 'new', component: RecipeEditComponent },
         { path: ':id', component: RecipeDetailComponent },
         { path: ':id/edit', component: RecipeEditComponent }
      ]
   },
   { path: 'shopping-list', component: ShoppingListComponent },
   { path: '**', component: NoPageFoundComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {}
