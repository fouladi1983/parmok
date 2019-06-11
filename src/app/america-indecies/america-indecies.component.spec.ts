import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaIndeciesComponent } from './america-indecies.component';

describe('AmericaIndeciesComponent', () => {
  let component: AmericaIndeciesComponent;
  let fixture: ComponentFixture<AmericaIndeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericaIndeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaIndeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
