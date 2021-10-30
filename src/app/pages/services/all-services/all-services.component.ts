import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategoryService } from './../../../services/category.service';


@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllServicesComponent implements OnInit {
  data_services:any = [];
  configServices:any;
  urlAssets:any;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) {
    this.urlAssets = environment.server;
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

        if(element.contents.length > 0) {
          const findElement = element.contents.find((item:any) => item.type == "thumbnails" );
          // console.log('findElement', findElement);
          this.data_services.push(findElement);
        }
      });
    });
  }


  callToAction(service:any){
    // console.log('service', service);
    this.router.navigate([`/services/details/${service.category}`]);

  }

}
