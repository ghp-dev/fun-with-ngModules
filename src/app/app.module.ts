import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModAModule} from './mod-a/mod-a.module';
import {ModBModule} from './mod-b/mod-b.module';
import {FormsModule} from '@angular/forms';
import {ModCModule} from './mod-c/mod-c.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModAModule,
    ModBModule,
    ModCModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
