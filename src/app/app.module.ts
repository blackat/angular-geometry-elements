import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  // The bridge between Angular and the Web API.
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, {injector});
    customElements.define('geometry-elements', el);
  }

  ngDoBootstrap() {}

}
