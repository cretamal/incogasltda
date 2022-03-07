import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navMenu:any = [];
  private unsubscribe$ = new Subject();
  listItemsShoppingCart:any = [];

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ) {
    this.navMenu = [
      {id:0,  label:'Home',  url: '/home'},
      {id:1,  label:'Somos', url: '/somos'},
      {id:2,  label:'Segmentos', url: '/services'},
      {id:3,  label:'Productos', url: '/products'},
      {id:4,  label:'Contacto', url: '/contacto'},
    ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.observerShopingCart();
  }


  gotoLink(url:any){
    this.router.navigate([`/${url}`]);
  }

  openShoppingCart(){
    this.shoppingCartService.openStatusShoppingCart();
  }

  observerShopingCart(){
    this.shoppingCartService.getShoppingCart.pipe(takeUntil(this.unsubscribe$)).subscribe(resp => {
      console.log('header-resp', resp);
      this.listItemsShoppingCart = resp;
    });
  }

}
