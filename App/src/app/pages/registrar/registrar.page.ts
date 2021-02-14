import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  public voltarIcon = '../../assets/icon/voltar.svg';
  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navController.back();
  }
}
