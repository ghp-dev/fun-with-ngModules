import { Component, OnInit } from '@angular/core';
import {SharedIdService} from '../../shared/shared-id.service';
import {MigratedIdService} from '../../shared/migrated-id.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
  public id: number;
  private isLoaded: boolean;

  constructor(private readonly sharedIdService: SharedIdService,
              private readonly migratedService: MigratedIdService) { }

  ngOnInit() {

    this.sharedIdService.currentValue$.subscribe((value) => {
      this.id = value;
    });
    this.migratedService.currentValue$.subscribe((value) => {
      this.id = value;
    });
    this.isLoaded = true;
  }



}
