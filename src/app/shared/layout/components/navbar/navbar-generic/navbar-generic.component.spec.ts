import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGenericComponent } from './navbar-generic.component';

describe('NavbarGenericComponent', () => {
  let component: NavbarGenericComponent;
  let fixture: ComponentFixture<NavbarGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
