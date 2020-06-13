import { Injectable } from '@angular/core';
import { Users } from 'src/app/Models/interface';

@Injectable({
  providedIn: 'root'
})
export class UserServeService {

  constructor() { }

  saveUserInfosLocalStorage(userInfos:Users){
    localStorage.setItem('appTrackinAdmingUserId', userInfos.idUser);
    localStorage.setItem('appTrackingAdminUserLogin', userInfos.login);
  }

  saveActiviteUserId(idActiviteUser){
    localStorage.setItem('appTrackingAdminIdActiviteUser', idActiviteUser);
  }

  deleteActiviteUserId(){
    localStorage.removeItem('appTrackingAdminIdActiviteUser');
  }


  cleanLocalStorage() {
    localStorage.removeItem('appTrackingAdminUserId');
    localStorage.removeItem('appTrackingAdminUserLogin');
  }


}
