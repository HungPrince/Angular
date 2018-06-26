import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElemementComponent } from './angular-elemement.component';

describe('AngularElemementComponent', () => {
  let component: AngularElemementComponent;
  let fixture: ComponentFixture<AngularElemementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularElemementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularElemementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
