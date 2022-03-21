import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import { ContentService } from './../../../services/content.service';
import * as qs from 'qs';

@Component({
  selector: 'app-big-banner',
  templateUrl: './big-banner.component.html',
  styleUrls: ['./big-banner.component.scss']
})
export class BigBannerComponent implements OnInit, AfterViewInit {
  temp_data:any;
  @Input() Type:any;
  // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::
  slides_data:any  = [];
  config_slide:any = {
    slidesToShow:1,
    slidesToScroll:1
  };

  constructor(
    private contentService: ContentService,
    private homePageService: HomePageService
  ) {
    // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::
    // this.slides_data = [
    //   {
    //     img: "./assets/img/slider-1.jpg",
    //     title: "1 Lorem Ipsum",
    //     subTitle:"Lorem Ipsum",
    //     message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    //   }

    // ];



  }

  ngOnInit(){

  }

  ngAfterViewInit() {
    this.getDataBanner();
  }

  getDataBanner(){
    // QUERY QUE TRAE LOS COMPONENTES ANIDADOS + IMAGENES
    const query = qs.stringify({
      populate: ['*', 'bigBanner', 'bigBanner.image_web.media', 'bigBanner.image_movil.media'],
    }, {
      encodeValuesOnly: true,
    });
    this.homePageService.getDataPage(`?${query}`).subscribe( (slide) => {
      this.slides_data = slide.data[0].attributes.bigBanner;
    });
  }
}
