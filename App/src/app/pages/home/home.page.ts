import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public icon: string = "../../assets/img/logo.svg";
  public ajuda: string = "../../assets/img/ajuda.svg";
  public avatar: string = "../../assets/img/avatar.svg";
  public postagem: string = "../../assets/img/postagem.png";
  public postagemShingeki: string = "../../assets/img/shingeki.jpg";
  public postagemNaruto: string = "../../assets/img/naruto.jpg";

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    width: 100    
  };

  slideOptsConteudo = {
    initialSlide: 0,
    speed: 400,
    width: 250
    
  };

  slideOptsPessoas = {
    initialSlide: 0,
    speed: 400,
    width: 140
    
  };
  ngOnInit() {

    
  }

}
