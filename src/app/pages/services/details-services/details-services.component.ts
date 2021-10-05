import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-details-services',
  templateUrl: './details-services.component.html',
  styleUrls: ['./details-services.component.scss']
})
export class DetailsServicesComponent implements OnInit {
  nameServices:any = 'default';
  idParamRoute:any;
  dataPage:any = [];
  // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::
  slides_data:any  = [];
  config_slide:any = {
    slidesToShow:3,
    slidesToScroll:3
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
  ) {
    this.idParamRoute = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log('this.idParamRoute', this.idParamRoute);
    // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::
    // this.slides_data = [
    //   {
    //     img: "https://via.placeholder.com/300x300.png/333/fff",
    //     title: "Manejo y Suministro de Gases",
    //     subTitle:"Suministro confiable de los gases industriales que necesita para hacer que su empresa prospere.",
    //     message: "Ver Más"
    //   },
    //   {
    //     img: "https://via.placeholder.com/300x300.png/333/fff",
    //     title: "Servicios industriales",
    //     subTitle:"Permita que nuestros servicios de tanques y suministro por tuberías sean el camino hacia su eficiencia.",
    //     message: "Ver Más"
    //   },
    //   {
    //     img: "https://via.placeholder.com/300x300.png/333/fff",
    //     title: "Servicios de Homecare",
    //     subTitle:"El Servicio Home Health Care Linde está desarrollado para atender en forma segura a pacientes con problemas respiratorios",
    //     message: "Ver Más"
    //   }
    // ];
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryService.getAll().subscribe( (category) => {
      let matchElement  = category.find((item:any) => item.id === this.idParamRoute);
      let itemDetails   = matchElement.contents.find((item:any) => item.type === 'page');
      this.dataPage = itemDetails;
      // console.log('categoryService:', {
      //   'category': category,
      //   'this.idParamRoute': this.idParamRoute,
      //   'matchElement': matchElement,
      //   'itemDetails': itemDetails
      // });
    });
  }

}
