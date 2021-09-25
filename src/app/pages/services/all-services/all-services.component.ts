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
      theme:'service-card-primary',
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
      // console.log('category', category);
      category.forEach((element:any) => {
        if(element.content != undefined && element.content.Thumbnails != undefined){
          // console.log('element', element.content.Thumbnails);
          this.data_services.push(element.content.Thumbnails);
        }
      });
    });
  }

}
