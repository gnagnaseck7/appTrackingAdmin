import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarHookService } from 'src/app/shared/services/sidebar-hook.service';
import { Subscription, interval } from 'rxjs';
import { AccueilServiceService } from '../../services/accueil-service.service';
import { ActiviteUserRetour, PointGps } from 'src/app/Models/interface';

@Component({
  selector: 'app-accueil-container',
  template: '<app-accueil (pointGpsEmitter)="chargerPointGps($event)" [listPointGps]="listPointGps | async" [listeActiviteEncours]="listeActiviteEncour | async"></app-accueil>',
})
export class AccueilContainerComponent implements OnInit,OnDestroy {
  listeActiviteEncour;
  listPointGps;
  subscriptionListeActivite:Subscription;
  subscriptionListPoint:Subscription;
  currentIdActiviteEnCours:number;
  constructor(private sideBarService: SidebarHookService,private accueilServ:AccueilServiceService) { }

  
  ngOnInit() {
    this.sideBarService.createGenericSideBar();
    this.listeActiviteEncour=this.accueilServ.listActiviteEncourObserv$;
    this.listPointGps=this.accueilServ.listPointGpsActiviteObserv$;
    this.getListeAllActiviteEnCours();
    this.subscriptionListeActivite =interval(30000)
    .subscribe((val) => { 
      this.getListeAllActiviteEnCours();
     });
   }

   getListeAllActiviteEnCours(){
    this.accueilServ.getListActiviteEncours().subscribe((listeActivite:ActiviteUserRetour[]) => {
      this.accueilServ.emitListActiviteEnCours(listeActivite);
    });
   }

   ngOnDestroy(){
     this.subscriptionListeActivite.unsubscribe();
   }

   chargerPointGps(idActiviteUser:number){
    this.currentIdActiviteEnCours=idActiviteUser;
    this.subscriptionListeActivite.unsubscribe();
    this.miseAjoursListPoin();
    
   }

   miseAjoursListPoin(){
    this.getListePointGpsByIdActiviteUser();
    this.subscriptionListeActivite =interval(30000)
    .subscribe((val) => { 
      this.getListePointGpsByIdActiviteUser();
     });
   }

   getListePointGpsByIdActiviteUser(){
    this.accueilServ.getListPointActivite(this.currentIdActiviteEnCours).subscribe((listePoint:PointGps[]) => {
      this.accueilServ.emitListPointGps(listePoint);
    });
   }


  
}
