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
      category.forEach((element:any) => {
        if(element.contents.length > 0) {
          const findElement = element.contents.find((item:any) => item.type == "thumbnails" );
          console.log('findElement', findElement);
          this.data_services.push(findElement.Thumbnails);
        }
      });
    });
  }

}
