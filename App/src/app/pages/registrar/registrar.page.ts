import { Register } from './../../model/register';
import { AppServiceService } from './../../services/app-service/app-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountServiceService } from 'src/app/services/account-service/account-service.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  public voltarIcon = '../../assets/icon/voltar.svg';
  public nome: string;
  public senha: string;
  public email:string;
  public confirmaSenha:string;
  public registerobj: Register = new Register();
  public senhaError: boolean = false;
  constructor(public navController: NavController, public accountService: AccountServiceService, public appService: AppServiceService) { }

  ngOnInit() {
  }

  goBack(){
    this.navController.back();
  }

  register(){
    this.registerobj.email = this.email;
    this.registerobj.senha = this.senha;
    this.registerobj.nome = this.nome;

    if(this.nome == null || this.nome == ""){
      this.appService.presentAlert("Ops!","Preencha o Nome Corretamente!")
      return;
    }
    if(this.email == null || this.email == ""){
      this.appService.presentAlert("Ops!","Preencha o Email Corretamente!")
      return;
    }
    if(this.senha == null || this.senha == ""){
      this.appService.presentAlert("Ops!","Preencha a Senha Corretamente!")
      return;
    }
    if(this.confirmaSenha == null || this.confirmaSenha == ""){
      this.appService.presentAlert("Ops!","Preencha a Confirmação da Senha Corretamente!")
      return;
    }
    if(this.confirmaSenha != this.senha){
      this.senhaError = true;
      return;
    }

    this.accountService.registerUsuario(this.registerobj).subscribe(data =>{
      if(data["success"] == true){
        this.appService.presentAlert("Oba!", "Sua conta foi registrada com Sucesso!")
        this.navController.back();
      }else{
        this.appService.presentAlert("Ops!", "Contate o Suporte!")
      }
    });
        
  }
}
