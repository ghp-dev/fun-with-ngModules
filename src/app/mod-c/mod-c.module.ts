import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompCComponent } from './comp-c/comp-c.component';
import {ModBModule} from '../mod-b/mod-b.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [CompCComponent],
  exports: [CompCComponent],
  imports: [
    CommonModule,
    ModBModule,
    SharedModule
  ]
})
export class ModCModule { }
