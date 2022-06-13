import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('navMenuMovil') navMenuMovil!: ElementRef;
  @ViewChild('btnMenuMovil') btnMenuMovil!: ElementRef;

  navMenu:any = [];
  private unsubscribe$ = new Subject();
  listItemsShoppingCart:any = [];
  openMenuMovil:boolean = false;

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private renderer: Renderer2,
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

  toggeleMenu(){
    if(this.openMenuMovil === false){
      this.renderer.setStyle(this.navMenuMovil.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.btnMenuMovil.nativeElement, 'background', '#000');
      this.openMenuMovil = true;
    }else if(this.openMenuMovil === true){
      this.renderer.setStyle(this.navMenuMovil.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.btnMenuMovil.nativeElement, 'background', '#e41b23');
      this.openMenuMovil = false;
    }
  }

}
