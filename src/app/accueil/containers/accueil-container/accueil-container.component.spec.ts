import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilContainerComponent } from './accueil-container.component';

describe('AccueilContainerComponent', () => {
  let component: AccueilContainerComponent;
  let fixture: ComponentFixture<AccueilContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
