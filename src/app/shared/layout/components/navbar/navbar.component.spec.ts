import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HttpClientTestingModule } from '../../../../../../node_modules/@angular/common/http/testing';
import { SidebarHookService } from '../../../services/sidebar-hook.service';
import { NO_ERRORS_SCHEMA } from '../../../../../../node_modules/@angular/core';
import { Router } from '../../../../../../node_modules/@angular/router';


fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let sideBarServ:SidebarHookService;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[HttpClientTestingModule],
      providers:[SidebarHookService,{ provide: Router, useValue: router }],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
    sideBarServ = TestBed.get(SidebarHookService);
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
