import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAComponent } from './comp-a.component';
import {FormsModule} from '@angular/forms';
import {IdService} from '../id.service';

describe('CompAComponent', () => {
  let component: CompAComponent;
  let fixture: ComponentFixture<CompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompAComponent ],
      imports: [FormsModule],
      providers: [IdService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
