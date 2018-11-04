import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-shopping-list',
   templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
   ingredients: Ingredient[];
   private subscription: Subscription;

   constructor(private slService: ShoppingListService) {}

   ngOnInit() {
      this.ingredients = this.slService.getIngredients();
      this.slService.ingredientsChanged.subscribe(
         (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
         }
      );
   }

   ngOnDestroy() {
      if (this.subscription) {
         this.subscription.unsubscribe();
      }
   }
}
