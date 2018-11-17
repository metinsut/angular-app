import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      NoPageFoundComponent
   ],
   imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, SharedModule],
   providers: [ShoppingListService],
   bootstrap: [AppComponent]
})
export class AppModule { }
