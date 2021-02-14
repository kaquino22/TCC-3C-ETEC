import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {
  public voltarIcon = '../../assets/icon/voltar.svg';
  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navController.back();
  }
}
