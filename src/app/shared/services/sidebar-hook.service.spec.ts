import { TestBed } from '@angular/core/testing';

import { SidebarHookService } from './sidebar-hook.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewContainerRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { NavbarGenericComponent } from '../layout/components/navbar/navbar-generic/navbar-generic.component';

fdescribe('SidebarHookService', () => {

  let httpClient: HttpClient;
  let service: SidebarHookService;
  let componetFact:ComponentFactoryResolver;

  beforeEach(() => {
    
    @NgModule({
      declarations: [NavbarGenericComponent],
      entryComponents: [NavbarGenericComponent]
  })
  class CustomFeatureModule { }
  
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    }).compileComponents();
    service = TestBed.get(SidebarHookService);
    httpClient = TestBed.get(HttpClient);
    componetFact=TestBed.get(ComponentFactoryResolver);
  });

  describe('registerSideBarHookRef', () => {
    it('should set a new value for _sideBarHookRef attribute by receiving parameter ', () => {
      spyOn(service, 'registerSideBarHookRef').and.callThrough();
     let sidebarHookRef: ViewContainerRef;
      service._sideBarHookRef=null;
      service.registerSideBarHookRef(sidebarHookRef);
      expect(service._sideBarHookRef).toEqual(sidebarHookRef);
    });
  });

  
  describe('getSideBarHookRef', () => {
    it('should return the value of _sideBarHookRef service attribut ', () => {
      let sidebarHookRef1: ViewContainerRef;
      service.registerSideBarHookRef(sidebarHookRef1);
      spyOn(service, 'getSideBarHookRef').and.callThrough();
      let retour=service.getSideBarHookRef();
      expect(retour).toEqual(sidebarHookRef1);
    });
  });

 xdescribe('createGenericSideBar', () => {
    it('should Creates generic side bar ', () => {
      spyOn(componetFact, 'resolveComponentFactory').and.callThrough();
      //spyOn(service._sideBarContainerRef, 'clear').and.callThrough();
      let sidebarHookRef1: ViewContainerRef;
      service.registerSideBarHookRef(sidebarHookRef1);
     // spyOn(service._sideBarContainerRef, 'createComponent').and.callThrough();
      service.createGenericSideBar();
      expect(componetFact.resolveComponentFactory).toHaveBeenCalled();
      expect(service._sideBarContainerRef.clear).toHaveBeenCalled();
      expect(service._sideBarContainerRef.createComponent).toHaveBeenCalled();
    });
  });


  it('should be created', () => {
    const service: SidebarHookService = TestBed.get(SidebarHookService);
    expect(service).toBeTruthy();
  });
});
