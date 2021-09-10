import { Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

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
    private productService: ProductService
  ) {
    // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::
    // this.slides_data = [
    //   {
    //     img: "https://via.placeholder.com/600x600.png/333/fff",
    //     title: "Manejo y Suministro de Gases",
    //     description:"Suministro confiable de los gases industriales que necesita para hacer que su empresa prospere.",
    //     message: 'ldddldlñd'
    //   }
    // ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getAllProducts();
  }


  getAllProducts(){
    this.productService.getProduct(4).subscribe( (product) => {

      console.log('this.data_products', product );
    });
  }


}
