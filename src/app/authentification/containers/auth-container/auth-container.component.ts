import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { LoginServService } from '../../services/login-serv.service';
import { UserServeService } from '../../services/user-serve.service';
import { Credentials } from 'src/app/Models/interface';

@Component({
  selector: 'app-auth-container',
  template: '<app-auth (connexionEmitter)="onCredentialReceiveHandle($event)" [connexionError]="retourConnexion"></app-auth>'
})
export class AuthContainerComponent implements OnInit {

  constructor(private logingServ:LoginServService,private userServ:UserServeService,private route:Router) { }
  getConnexionError:boolean=false;
  ngOnInit() {
  }
  retourConnexion:string;
  
  onCredentialReceiveHandle(credential:Credentials){
    this.retourConnexion='';
    this.logingServ.getConnexionFromBack(credential).subscribe((response) => {
      if(response==null){
        this.retourConnexion='KO';
      }else{
        this.retourConnexion='OK';
        this.userServ.saveUserInfosLocalStorage(response);
        this.route.navigate(['layout/accueil']);
      }
   });
  }

}
