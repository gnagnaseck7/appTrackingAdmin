import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sidebar-hook]',
})
export class SideBarHookDirective{

  constructor(public viewContainerRef: ViewContainerRef) {}

 }