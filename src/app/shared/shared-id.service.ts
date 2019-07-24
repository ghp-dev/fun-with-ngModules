import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedIdService {

  private currentValueSource = new Subject<number>();

  public currentValue$ = this.currentValueSource.asObservable();

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
    this.currentValueSource.next(this._id);
  }

  private _id = 0;
}
