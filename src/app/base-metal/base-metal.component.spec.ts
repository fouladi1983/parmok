import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMetalComponent } from './base-metal.component';

describe('BaseMetalComponent', () => {
  let component: BaseMetalComponent;
  let fixture: ComponentFixture<BaseMetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseMetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
