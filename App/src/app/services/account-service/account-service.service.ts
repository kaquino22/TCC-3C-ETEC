import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  public environmentLink = environment.urlDev;
  constructor(public http: HttpClient) { }


  getUsuario(login) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post(`${this.environmentLink}Account/Login`, login, { headers });
  }

  registerUsuario(register) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post(`${this.environmentLink}Account/Register`, register, { headers });
  }



}
