import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllProductsComponent implements OnInit {
  data_products:any = [];
  configProducts:any;
  
  constructor() {
    this.data_products = [
      {id:0, type:'products', params:'0', label:'Lorem Ipsum', message:'Lorem Ipsum is simply'},
      {id:1, type:'products', params:'1', label:'Lorem Ipsum', message:'Lorem Ipsum is simply'},
      {id:2, type:'products', params:'2', label:'Lorem Ipsum', message:'Lorem Ipsum is simply'}
    ];

    this.configProducts = {
      theme:'product-service backgroud-product',
      typeMedia:'background'
    };

  }

  ngOnInit(): void {
  }

}
