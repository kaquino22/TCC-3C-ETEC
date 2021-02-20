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
  public erroLogin: boolean = false;
  public loginobj: Login = new Login();
  constructor(public navController: NavController, public appService:AppServiceService, public accountService: AccountServiceService) { }

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

    this.accountService.getUsuario(this.loginobj).subscribe(data =>{
      console.log(data)
        this.erroLogin = data["error"];

    });
          
    
  }
}
