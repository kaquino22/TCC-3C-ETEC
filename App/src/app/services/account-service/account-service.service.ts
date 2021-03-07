import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  public environmentLink = environment.urlProd;
  constructor(public http: HttpClient) { }


  login(login) {
    return this.http.post(`${this.environmentLink}Account/Login`, login,);
  }

  registerUsuario(register) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post(`${this.environmentLink}Account/Register`, register, { headers });
  }



}
