import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AppProductDescriptionComponent } from './app-product-description/app-product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    AppProductDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
