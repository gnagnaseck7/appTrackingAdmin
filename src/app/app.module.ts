import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthContainerComponent } from './authentification/containers/auth-container/auth-container.component';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';
import { AccueilContainerComponent } from './accueil/containers/accueil-container/accueil-container.component';
import { AuthGuardService } from './authentification/services/auth-guard.service';
import { SideBarHookDirective } from './shared/directives/sidebar-hook.directive';
import { AuthentificationModule } from './authentification/authentification.module';
import { SharedModule } from './shared/shared.module';
import { AccueilModule } from './accueil/accueil.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes =[
  {path :'authentification',component :AuthContainerComponent},
  
  { path: 'layout', component: LayoutMenuComponent, children:
    [
      {path :'accueil',component :AccueilContainerComponent,canActivate:[AuthGuardService]}
    ]
 },
  {path:'',redirectTo:'authentification',pathMatch:'full'},
  {path:'**',redirectTo:'authentification'}
]

@NgModule({
  declarations: [
    AppComponent,
    SideBarHookDirective,
    LayoutMenuComponent,
  ],
  imports: [
    BrowserModule,
    AuthentificationModule,
    SharedModule,
    AccueilModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
