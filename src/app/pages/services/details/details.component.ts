import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsComponent implements OnInit {
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
    private activatedRoute: ActivatedRoute,

  ) {
    this.idParamRoute = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log('this.idParamRoute', this.idParamRoute);
    // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::
    this.slides_data = [
      {
        img: "https://via.placeholder.com/300x500.png/333/fff",
        title: "1 Lorem Ipsum",
        subTitle:"Lorem Ipsum",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        img: "https://via.placeholder.com/300x500.png/333/fff",
        title: "2 Lorem Ipsum",
        subTitle:"Lorem Ipsum",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        img: "https://via.placeholder.com/300x500.png/333/fff",
        title: "3 Lorem Ipsum",
        subTitle:"Lorem Ipsum",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        img: "https://via.placeholder.com/300x500.png/333/fff",
        title: "1 Lorem Ipsum",
        subTitle:"Lorem Ipsum",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },

    ];

  }

  ngOnInit(): void {
  }


}
