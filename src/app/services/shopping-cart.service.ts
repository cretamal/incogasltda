import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCartComponent } from '../components/ui-kit/shopping-cart/shopping-cart.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingItem$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

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


  agregar(producto:any) {
    if (!this.existe(producto.id)) {
      const itemProduct = {
        id: producto.id,
        cantidad: producto.cantidad,
        title: producto.title,
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
    if (indice != -1) {
        this.productos.splice(indice, 1);
        this.guardar();
    }
  }

  guardar() {
    if(this.productos.length > 0) {
      localStorage.setItem(this.clave, JSON.stringify(this.productos));
      this.shoppingItem$.next(this.productos);

      // console.log('guardar', this.productos);
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

  // obtenerConteo() {
  //   return this.productos.length;
  // }


}
