import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Credentials, Users } from 'src/app/Models/interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServService {

  constructor(private httpClient: HttpClient) { }

  getConnexionFromBack(credential:Credentials){
    return this.httpClient.post<Users>(environment.apiUrl+"/getConnexionAdmin",credential);
  }
}
