import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navMenu:any = [];

  constructor() {
    this.navMenu = [
      {id:0,  label:'Home',  url: '/'},
      {id:1,  label:'Somos', url: '/somos'},
      {id:2,  label:'Servicios', url: '/services'},
      {id:3,  label:'Productos', url: '/products'},
      {id:4,  label:'Contacto', url: '/contacts'},
    ];
  }

  ngOnInit(): void {
  }

}
