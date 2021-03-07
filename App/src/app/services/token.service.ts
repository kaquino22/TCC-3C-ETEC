//pacote
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { environment } from "src/environments/environment";
import { Usuario } from "../model/usuario";

@Injectable({
    providedIn: "root",
})

export class TokenService {
    public userToken: string = "";
    public impersonateToken: string = "";
    public user: Usuario;

    constructor(
        private _http: HttpClient,

        private _storage: Storage
    ) {
        this.getToken();
    }

    setToken(token) {
        this._storage.set("userToken", token);
        this.userToken = token;
    }

    setUser(user) {
      this._storage.set("user", user);
      this.user = user;
    }

    getUser() {
      this._storage.get("user").then((user) => {
          this.user = user;
      });
      return this.user;
    }

    getImpersonateToken(id) {
        return this._http.get(`${environment.urlProd}Account/impersonate/${id}`);
    }

    getToken() {
        this._storage.get("userToken").then((token) => {
            this.userToken = token;
        });
        return this.userToken;
    }

    isActive() {
        this.getToken();
        if (this.userToken === null || this.userToken === undefined) {
            return false;
        } else {
            return true;
        }
    }
}
