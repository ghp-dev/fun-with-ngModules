import {Component, Input, OnInit} from '@angular/core';
import {IdService} from '../id.service';
import {SharedIdService} from '../../shared/shared-id.service';
import {MigratedIdService} from '../../shared/migrated-id.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {
  public id = 0;
  serviceId: number;
  isLoaded = false;
  sharedServiceId: number;
  migratedServiceId: number;

  constructor(private readonly service: IdService,
              private readonly sharedService: SharedIdService,
              private readonly migratedService: MigratedIdService) { }

  ngOnInit() {
    this.service.currentValue$.subscribe((value) => {
      this.serviceId = value;
    });
    this.sharedService.currentValue$.subscribe((value) => {
      this.serviceId = value;
    });
    this.migratedService.currentValue$.subscribe((value) => {
      this.serviceId = value;
    });
    this.isLoaded = true;
  }


  public onLocalId() {
    this.service.id = this.id;
  }

  onMigratedId() {
    this.migratedService.id = this.id;
  }

  onSharedId() {
    this.sharedService.id = this.id;
  }
}
