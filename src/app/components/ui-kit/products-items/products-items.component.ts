import { Component, OnInit } from '@angular/core';
import * as qs from 'qs';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-products-items',
  templateUrl: './products-items.component.html',
  styleUrls: ['./products-items.component.scss']
})
export class ProductsItemsComponent implements OnInit {
  data_products:any = [];
  urlAssets:any;

  constructor(
    private productService: ProductService
  ) {
    this.urlAssets = environment.server;
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
      const query = qs.stringify({
        populate: ['*', 'image_web.media'],
      }, {
        encodeValuesOnly: true,
      });
      this.productService.getAll(`?${query}`).subscribe( (product) => {
        this.data_products =  product.data;
        console.log('this.data_products', this.data_products);
      });
    }

}
