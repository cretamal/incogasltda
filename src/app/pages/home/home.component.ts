
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ContentService } from './../../services/content.service';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data_services:any = [];
  data_products:any = [];

  configProducts:any;
  configServices:any;

  constructor(
    private contentService: ContentService,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {

    this.configProducts = {
      theme:'product-service backgroud-product',
      typeMedia:'background'
    };

    this.configServices = {
      theme:'service-card-primary',
      typeMedia:'icon'
    };



  }


  ngOnInit(): void {
    this.getAllContent();
  }

  ngAfterViewInit() {
    this.getAllCategory();
    this.getAllProducts();
  }


  getAllContent(){
    this.contentService.getAll().subscribe( (content) => {
      // console.log('content', content);
    });
  }


  getAllCategory(){
    this.categoryService.getAll().subscribe( (category) => {
      category.forEach((element:any) => {
        if(element.contents.length > 0) {
          const findElement = element.contents.find((item:any) => item.type == "thumbnails" );
          console.log('findElement', findElement);
          this.data_services.push(findElement.Thumbnails);
        }
      });
    });
  }

  // getAllCategory(){
  //   this.categoryService.getAll().subscribe( (category) => {
  //     console.log('category', category);
  //     this.data_services =  category;
  //     console.log('this.data_services', this.data_services);
  //   });
  // }

  getAllProducts(){
    this.productService.getAll().subscribe( (product) => {
      this.data_products =  product;
      // console.log('this.data_products', this.data_products);
    });
  }





}
