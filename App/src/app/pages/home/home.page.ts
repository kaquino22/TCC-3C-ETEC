import { MenuController, NavController } from '@ionic/angular';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public token: string = "";
  public user: Usuario;

  constructor(public tokenService: TokenService, public navController: NavController, private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  ngOnInit() {
    this.token = this.tokenService.getToken();

    this.user = this.tokenService.getUser();
 
    if(this.token == null || this.token == ""){
      this.navController.navigateRoot(`/`)
    }

    console.log(this.token);
  }

}
