import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeIndeciesComponent } from './europe-indecies.component';

describe('EuropeIndeciesComponent', () => {
  let component: EuropeIndeciesComponent;
  let fixture: ComponentFixture<EuropeIndeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeIndeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeIndeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
