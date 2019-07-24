import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompAComponent} from './comp-a/comp-a.component';
import {IdService} from './id.service';
import {FormsModule} from '@angular/forms';
import {MigratedIdService} from '../shared/migrated-id.service';

@NgModule({
  providers: [
    IdService,
    MigratedIdService],
  declarations: [CompAComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CompAComponent]
})
export class ModAModule {
}
