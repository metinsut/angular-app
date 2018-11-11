import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
   ingredientsChanged = new Subject<Ingredient[]>();
   startedEditing = new Subject<number>();
   private ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
   ];

   getIngredients() {
      return [...this.ingredients];
   }
   getIngredient(i) {
      return this.ingredients[i];
   }

   addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next([...this.ingredients]);
   }

   addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next([...this.ingredients]);
   }

   updateIngredient(index: number, newIngredients: Ingredient) {
      this.ingredients[index] = newIngredients;
      this.ingredientsChanged.next([...this.ingredients]);
   }

   deleteIngredient(index: number) {
      this.ingredients = this.ingredients.filter((item, key) => key !== index);
      this.ingredientsChanged.next([...this.ingredients]);
   }
}
