
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ContentService } from './../../services/content.service';
import { CategoryService } from './../../services/category.service';
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
    private categoryService: CategoryService
  ) {
    this.data_products = [
      {id:0, type:'products', params:'0', label:'Lorem Ipsum', message:'Lorem Ipsum is simply'},
      {id:1, type:'products', params:'1', label:'Lorem Ipsum', message:'Lorem Ipsum is simply'},
      {id:2, type:'products', params:'2', label:'Lorem Ipsum', message:'Lorem Ipsum is simply'}
    ];


    this.configProducts = {
      theme:'product-service backgroud-product',
      typeMedia:'background'
    };
    this.configServices = {
      theme:'product-service',
      typeMedia:'icon'
    };



  }


  ngOnInit(): void {
    this.getAllContent();
  }

  ngAfterViewInit() {
    this.getAllCategory();
  }


  getAllContent(){
    this.contentService.getAll().subscribe( (content) => {
      console.log('content', content);
    });
  }

  getAllCategory(){
    this.categoryService.getAll().subscribe( (category) => {
      console.log('category', category);
      this.data_services =  category;
      console.log('this.data_services', this.data_services[0]);
    });
  }



}
