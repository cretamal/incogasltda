import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';


@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {
  data_services:any = [];
  configServices:any;

  constructor(
    private categoryService: CategoryService
  ) {
    
    this.configServices = {
      theme:'product-service',
      typeMedia:'icon'
    };
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryService.getAll().subscribe( (category) => {
      console.log('category', category);
      this.data_services =  category;
      console.log('this.data_services', this.data_services);
    });
  }

}
