import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { SidebarHookService } from '../../../services/sidebar-hook.service';
import { SideBarHookDirective } from '../../../directives/sidebar-hook.directive';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUserName:string='';

  constructor(private sideBarService: SidebarHookService,private route:Router) { }

 // @ViewChild(SideBarHookDirective,{static: true, read: ViewContainerRef}) sidebarHookDirective: SideBarHookDirective;
  @ViewChild('dynamicComponent', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  ngOnInit() {
    this.sideBarService.registerSideBarHookRef(this.container);
    this.currentUserName=localStorage.getItem("appTrackingAdminUserLogin");
  }

  logoutUser(){

    this.route.navigate(['/']);
  }

}
