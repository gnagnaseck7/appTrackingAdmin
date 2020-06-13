import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '../../../../node_modules/@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject, Observable } from '../../../../node_modules/rxjs';
import { ActiviteUserRetour, PointGps } from 'src/app/Models/interface';

@Injectable({
  providedIn: 'root'
})
export class AccueilServiceService {

  constructor(private http: HttpClient) { }

  listActiviteEncour=new Subject<ActiviteUserRetour[]>();
  public listActiviteEncourObserv$=this.listActiviteEncour.asObservable();

  listPointGpsActivite=new Subject<PointGps[]>();
  public listPointGpsActiviteObserv$=this.listPointGpsActivite.asObservable();

  getListActiviteEncours(){
    return this.http.get<ActiviteUserRetour[]>(environment.apiUrl+"/getListeAllActiviteEncours");
  }

  emitListActiviteEnCours(listActivite:ActiviteUserRetour[]){
    this.listActiviteEncour.next(listActivite);
  }

  getListPointActivite(idActiviteUser:number){
    return this.http.get<PointGps[]>(environment.apiUrl+"/getListePointByIdActivite/"+idActiviteUser);
  }

  emitListPointGps(listPoints:PointGps[]){
    this.listPointGpsActivite.next(listPoints);
  }

  
}
