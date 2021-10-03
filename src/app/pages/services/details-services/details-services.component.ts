import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-services',
  templateUrl: './details-services.component.html',
  styleUrls: ['./details-services.component.scss']
})
export class DetailsServicesComponent implements OnInit {
  nameServices:any = 'default';
  idParamRoute:any;
  // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::
  slides_data:any  = [];
  config_slide:any = {
    slidesToShow:3,
    slidesToScroll:3
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
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
  }

  // getAllProducts(){
  //   this.productService.getProduct(this.activatedRoute.snapshot.params['id']).subscribe( (product) => {
  //     this.product = product;
  //     // console.log('this.data_products-galery', product );
  //     this.slides_data = product.galery;

  //   });
  // }

}
