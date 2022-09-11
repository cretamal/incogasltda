
import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentService } from './../../services/content.service';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as qs from 'qs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  data_services:any = [];
  // data_products:any = [];

  configProducts:any;
  configServices:any;
  urlAssets:any;



  constructor(
    private categoryService: CategoryService,
    // private productService: ProductService,
    private router: Router,
  ) {
    this.urlAssets = environment.server;
    this.configProducts = {
      theme:'product-service backgroud-product',
      typeMedia:'background'
    };
    this.configServices = {
      theme:'service-card-primary',
      typeMedia:'icon'
    };
  }


  ngOnInit(): void {}

  ngAfterViewInit() {
    this.getAllCategory();
    // this.getAllProducts();
  }

  getAllCategory(){
    const query = qs.stringify({
      populate: ['*', 'icon.media', 'services', 'services.Description', 'services.Use', 'services.Materials', 'services.Security', 'services.icon.media', 'services.pdf.media'],
      sort: ['order:asc']
    }, {
      encodeValuesOnly: true,
    });

    this.categoryService.getAll(`?${query}`).subscribe( (category) => {
      // console.log('category:', category);
      // QUERY QUE TRAE LOS COMPONENTES ANIDADOS + IMAGENES
      this.data_services = category.data;
    });
  }

  // getAllProducts(){
  //   const query = qs.stringify({
  //     populate: ['*', 'image_web.media'],
  //   }, {
  //     encodeValuesOnly: true,
  //   });
  //   this.productService.getAll(`?${query}`).subscribe( (product) => {
  //     this.data_products =  product.data;
  //     console.log('this.data_products', this.data_products);
  //   });
  // }


  callToAction(service:any){
    this.router.navigate([`/services/details/${service.id}`]);
  }








}
