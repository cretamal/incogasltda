import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navMenu:any = [];

  constructor(
    private router: Router,
  ) {
    this.navMenu = [
      {id:0,  label:'Home',  url: '/'},
      {id:1,  label:'Somos', url: '/somos'},
      {id:2,  label:'Servicios', url: '/services'},
      {id:3,  label:'Productos', url: '/products'},
      {id:4,  label:'Contacto', url: '/'},
    ];
  }

  ngOnInit(): void {
  }


  gotoLink(url:any){
    this.router.navigate([`/${url}`]);
  }

}
