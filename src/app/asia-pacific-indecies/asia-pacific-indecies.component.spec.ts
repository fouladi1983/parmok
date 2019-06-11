import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaPacificIndeciesComponent } from './asia-pacific-indecies.component';

describe('AsiaPacificIndeciesComponent', () => {
  let component: AsiaPacificIndeciesComponent;
  let fixture: ComponentFixture<AsiaPacificIndeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiaPacificIndeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaPacificIndeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
