import { Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailProductComponent implements OnInit {
  @Input() Theme:any = "default";


  // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::
  slides_data:any  = [];
  config_slide:any = {
    slidesToShow:1,
    slidesToScroll:1
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::
    this.slides_data = [
      {
        img: "https://via.placeholder.com/600x600.png/333/fff",
        title: "Manejo y Suministro de Gases",
        subTitle:"Suministro confiable de los gases industriales que necesita para hacer que su empresa prospere.",
        message: "Ver Más"
      },
      {
        img: "https://via.placeholder.com/600x600.png/333/fff",
        title: "Servicios industriales",
        subTitle:"Permita que nuestros servicios de tanques y suministro por tuberías sean el camino hacia su eficiencia.",
        message: "Ver Más"
      },
      {
        img: "https://via.placeholder.com/600x600.png/333/fff",
        title: "Servicios de Homecare",
        subTitle:"El Servicio Home Health Care Linde está desarrollado para atender en forma segura a pacientes con problemas respiratorios",
        message: "Ver Más"
      }
    ];
  }

  ngOnInit(): void {
  }

}
