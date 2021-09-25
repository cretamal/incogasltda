import { Component } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'incogasltda';

  constructor(private shoppingCartService: ShoppingCartService){
    this.shoppingCartService.obtener();
  }




}
