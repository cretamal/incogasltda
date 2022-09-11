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
    private homePageService: HomePageService
  ) {}

  ngOnInit(){

  }

  ngAfterViewInit() {
    this.getDataBanner();
  }

  getDataBanner(){
    // QUERY QUE TRAE LOS COMPONENTES ANIDADOS + IMAGENES
    const query = qs.stringify({
      populate: ['*', 'BigBanner', 'BigBanner.web_img.media', 'BigBanner.movil_img.media' ],
    }, {
      encodeValuesOnly: true,
    });
    this.homePageService.getDataPage(`?${query}`).subscribe( (slide) => {
      // console.log('slide', slide);
      this.slides_data = slide.data[0].attributes.BigBanner;
    });
  }
}
