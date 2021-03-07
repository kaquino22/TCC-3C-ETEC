import { TokenService } from './../../services/token.service';
import { AccountServiceService } from './../../services/account-service/account-service.service';
import { AppServiceService } from './../../services/app-service/app-service.service';
import { Login } from './../../model/login';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {
  public voltarIcon = '../../assets/icon/voltar.svg';
  public email: string;
  public senha: string;
  public erro:object;
  public erroLogin: boolean = false;
  public loginobj: Login = new Login();
  constructor(public tokenService: TokenService,public navController: NavController, public appService:AppServiceService, public accountService: AccountServiceService) { }

  ngOnInit() {
  }

  goBack(){
    this.navController.back();
  }

  login(){
    this.loginobj.email = this.email;
    this.loginobj.senha = this.senha;

    if(this.email == null || this.email == ""){
      this.appService.presentAlert("Ops!","Preencha o Email Corretamente!")
      return;
    }
    if(this.senha == null || this.senha == ""){
      this.appService.presentAlert("Ops!","Preencha a Senha Corretamente!")
      return;
    }

    this.accountService.login(this.loginobj).subscribe(data =>{
      this.erro = data;
        this.erroLogin = data["error"];
        if(data["error"] == true){

        }else{
          this.tokenService.setToken(data["token"]);
          this.tokenService.setUser(data["usuario"]);
          this.navController.navigateRoot(`/home`);
        }
    });
          
    
  }
}
