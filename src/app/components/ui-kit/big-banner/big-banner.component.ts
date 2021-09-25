import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ContentService } from './../../../services/content.service';

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

  constructor(private contentService: ContentService) {
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
    this.contentService.getContentType('?type=big-banner').subscribe( (slide) => {
      this.slides_data = slide;

      // console.log('this.slides_data', this.slides_data);
    });
  }


}
