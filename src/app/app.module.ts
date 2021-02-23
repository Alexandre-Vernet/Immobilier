import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyComponent } from './Property/Property.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PropertyComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
