import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-banner',
  templateUrl: './big-banner.component.html',
  styleUrls: ['./big-banner.component.scss']
})
export class BigBannerComponent implements OnInit {
  // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::
  slides_data:any  = [];
  config_slide:any = {
    slidesToShow:1,
    slidesToScroll:1
  };

  constructor() {
    // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::
    this.slides_data = [
      {
        img: "https://via.placeholder.com/1200x400.png/333/fff",
        title: "1 Lorem Ipsum",
        subTitle:"Lorem Ipsum",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        img: "https://via.placeholder.com/1200x400.png/333/fff",
        title: "2 Lorem Ipsum",
        subTitle:"Lorem Ipsum",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },

    ];



  }

  ngOnInit(): void {
  }

}
