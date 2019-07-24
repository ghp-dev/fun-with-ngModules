import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSComponent } from './comp-s.component';

describe('CompSComponent', () => {
  let component: CompSComponent;
  let fixture: ComponentFixture<CompSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
