import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownDirective } from './directives/drop-down.directive';

@NgModule({
   imports: [CommonModule],
   declarations: [DropDownDirective],
   exports: [DropDownDirective, CommonModule]
})
export class SharedModule { }
