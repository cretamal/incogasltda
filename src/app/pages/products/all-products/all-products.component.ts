import { ProductService } from './../../../services/product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SubCategoryService } from 'src/app/services/sub-category.service';
// import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllProductsComponent implements OnInit {
  data_products:any = [];
  configProducts:any;

  constructor(
    private productService: ProductService,
    private subCategoryService: SubCategoryService
  ) {
    // this.data_products = [
    //   {id:0, type:'products', params:'0', label:'Lorem Ipsum', message:'Lorem Ipsum is simply'},
    //   {id:1, type:'products', params:'1', label:'Lorem Ipsum', message:'Lorem Ipsum is simply'},
    //   {id:2, type:'products', params:'2', label:'Lorem Ipsum', message:'Lorem Ipsum is simply'}
    // ];

    this.configProducts = {
      theme:'product-service backgroud-product',
      typeMedia:'background'
    };

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAll().subscribe( (product) => {
      Object.assign(product, {cantidad:1});
      this.data_products =  product;
      // console.log('this.data_products', this.data_products);
    });
  }


  handlerProduct($event:any){
    this.data_products = [];
    this.subCategoryService.findOne($event.id).subscribe( (subCategory) => {
      this.data_products = subCategory.products;
    });
  }

}
