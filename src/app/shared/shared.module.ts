import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MigratedIdService} from './migrated-id.service';
import { CompSComponent } from './comp-s/comp-s.component';

@NgModule({
  declarations: [CompSComponent],
  imports: [
    CommonModule
  ],
  providers: [MigratedIdService],
  exports: [CompSComponent]
})
export class SharedModule {
  constructor(private service: MigratedIdService){
    this.service.id = 42;
  }
}

