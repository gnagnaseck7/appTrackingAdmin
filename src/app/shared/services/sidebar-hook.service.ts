import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { SideBarHookDirective } from '../directives/sidebar-hook.directive';
import { NavbarGenericComponent } from '../layout/components/navbar/navbar-generic/navbar-generic.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarHookService {

 _sideBarHookRef: ViewContainerRef ;
 _sideBarContainerRef;

  constructor( private componentFactoryResolver: ComponentFactoryResolver) { }

   /**
   * Registers side bar hook ref
   * @param sidebarHookRef 
   */
  registerSideBarHookRef(sidebarHookRef: ViewContainerRef ): void {
    this._sideBarHookRef = sidebarHookRef;
  }

  /**
   * Gets side bar hook ref
   * @returns _sideBarHookRef 
   */
  getSideBarHookRef(): ViewContainerRef  {
    return this._sideBarHookRef;
  }

  /**
   * Creates generic side bar
   */
  createGenericSideBar(): void {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(NavbarGenericComponent);
    this._sideBarContainerRef = this._sideBarHookRef;
    this._sideBarContainerRef.clear();
    this._sideBarContainerRef.createComponent(componentFactory);
  }


  /**
   * Destroys side bar
   */
  destroySideBar(): void {
    this._sideBarContainerRef.clear();
  }

}
