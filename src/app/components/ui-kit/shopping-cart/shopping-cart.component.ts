import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  initValue:any = 1;
  isDisabled:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(){
    alert('Eliminar Item del storage');
  }

}
