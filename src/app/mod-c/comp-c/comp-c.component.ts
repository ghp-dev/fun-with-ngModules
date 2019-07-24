import { Component, OnInit } from '@angular/core';
import {SharedIdService} from '../../shared/shared-id.service';
import {MigratedIdService} from '../../shared/migrated-id.service';
import {IdService} from '../../mod-a/id.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.scss'],
  providers: [MigratedIdService],

})
export class CompCComponent implements OnInit {

  public id: number;
  private isLoaded: boolean;
  public idFromModuleA: number;

  constructor(private readonly sharedIdService: SharedIdService,
              private readonly migratedService: MigratedIdService,
              private readonly idService: IdService) { }

  ngOnInit() {

    this.sharedIdService.currentValue$.subscribe((value) => {
      this.id = value;
    });
    this.migratedService.currentValue$.subscribe(() => {
      this.id = this.migratedService.id;
    });
    this.idService.currentValue$.subscribe((value) => {
      this.idFromModuleA = value;
    });
    this.isLoaded = true;
  }



}
