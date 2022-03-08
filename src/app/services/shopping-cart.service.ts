import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCartComponent } from '../components/ui-kit/shopping-cart/shopping-cart.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingItem$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private statusShoppingCart$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  @ViewChild(ShoppingCartComponent)
  shoppingCartComponent?: ShoppingCartComponent;
  clave:any = "store-products";
  productos:any = [];

  constructor() {
    this.productos      = this.obtener();
    // console.log('constructor - ShoppingCartService', this.productos);
    if(this.productos.length > 0) {
      this.guardar();
    }
  }

  get getShoppingCart() { return this.shoppingItem$.asObservable();}

  get getstatusShoppingCart() { return this.statusShoppingCart$.asObservable();}


  agregar(producto:any) {
    console.log('producto', producto);
    Object.assign(producto, {cantidad:1});
    if (!this.existe(producto.id)) {
      const itemProduct = {
        id: producto.id,
        cantidad: producto.cantidad,
        name: producto.title,
        price: producto.price,
        img: producto.img
      }
      this.productos.push(itemProduct);
      this.guardar();
    }
    console.log('agregar - ShoppingCartService', {
      'this.productos': this.productos,
      'producto': producto,
    });
  }

  quitar(id:any) {
    const indice = this.productos.findIndex((p:any) => p.id === id);
    console.log('quitar', indice);
    if (indice != -1) {
        this.productos.splice(indice, 1);
        this.guardar();
    }
  }

  guardar() {
    console.log('this.productos.length', this.productos.length);
    if(this.productos.length >= 0) {
      localStorage.setItem(this.clave, JSON.stringify(this.productos));
      this.shoppingItem$.next(this.productos);
    }
  }

  obtener() {
    const storeShopping = localStorage.getItem(this.clave);
    if(storeShopping === null){
      this.guardar();
    }
    // console.log('localstorage::', storeShopping);
    return JSON.parse(storeShopping || '[]' );
    // return JSON.parse(productosCodificados) || [];
  }

  existe(id:number) {
    return this.productos.find((element:any)  => element.id === id);
  }

  updateStorage(productos:any){
      this.productos = [];
      this.productos = productos.shopCart;
      localStorage.setItem(this.clave, JSON.stringify(this.productos));
      this.shoppingItem$.next(this.productos);
      this.guardar();
  }

  openStatusShoppingCart(){
    this.statusShoppingCart$.next(true);
  }
  closeStatusShoppingCart(){
    this.statusShoppingCart$.next(false);
  }


  deleteAll(){
    this.productos = [];
    this.guardar();
  }

}
