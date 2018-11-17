import {
   Component,
   OnInit,
   ElementRef,
   ViewChild,
   OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from './../ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
   selector: 'app-shopping-edit',
   templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
   //  @ViewChild('nameInput')
   //  nameInputRef: ElementRef;
   //  @ViewChild('amountInput')
   //  amountInputRef: ElementRef;
   @ViewChild('myForm')
   myForm: NgForm;
   private subscription: Subscription;
   editMode = false;
   editedItemIndex: number;
   editedItem: Ingredient;
   name;
   amount;

   constructor(private slService: ShoppingListService) {}

   ngOnInit() {
      this.subscription = this.slService.startedEditing.subscribe(
         (index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.slService.getIngredient(index);
            this.myForm.setValue({
               name: this.editedItem.name,
               amount: this.editedItem.amount
            });
         }
      );
   }

   onSubmit(form: NgForm) {
      //   const ingName = this.nameInputRef.nativeElement.value;
      //   const ingAmount = this.amountInputRef.nativeElement.value;
      console.log(form);
      const value = form.value;

      const newIngredient = new Ingredient(value.name, value.amount);
      if (this.editMode) {
         this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      } else {
         this.slService.addIngredient(newIngredient);
      }
      this.editMode = false;
      form.reset();
   }

   onClear() {
      this.myForm.reset();
      this.editMode = false;
   }
   onDelete() {
      this.slService.deleteIngredient(this.editedItemIndex);
      this.onClear();
   }

   ngOnDestroy() {
      if (this.subscription) {
         this.subscription.unsubscribe();
      }
   }
}
