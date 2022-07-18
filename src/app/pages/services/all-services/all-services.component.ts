import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategoryService } from './../../../services/category.service';
import * as qs from 'qs';

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
    const query = qs.stringify({
      populate: ['*', 'icon.media', 'services', 'services.Description', 'services.Use', 'services.Materials', 'services.Security', 'services.icon.media', 'services.pdf.media'],
      sort: ['order:asc']
    }, {
      encodeValuesOnly: true,
    });

    this.categoryService.getAll(`?${query}`).subscribe( (category) => {
      console.log('category:', category);
      // QUERY QUE TRAE LOS COMPONENTES ANIDADOS + IMAGENES
      this.data_services = category.data;
    });
  }


  callToAction(service:any){
    this.router.navigate([`/services/details/${service.id}`]);
  }

}
