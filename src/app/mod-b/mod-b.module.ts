import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompBComponent } from './comp-b/comp-b.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {MigratedIdService} from '../shared/migrated-id.service';

@NgModule({
  providers: [MigratedIdService],
  declarations: [CompBComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [CompBComponent],
})
export class ModBModule { }
