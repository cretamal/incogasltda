import { ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MediaMatcher } from '@angular/cdk/layout';

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};


@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlidesComponent implements OnInit {

  @Input() data: any = [];
  @Input() config: any = {};

  @Input() Theme:any;

  slides:any = [];
  slideConfig:any;
  urlAssets:any;

  mdq: MediaQueryList;
  mediaQueryListener:()=>void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {

    this.mdq = media.matchMedia('(max-width: 768px)');
    this.urlAssets = environment.server;

    this.mediaQueryListener = () => {
      changeDetectorRef.detectChanges();
      console.log("Match?: ", this.mdq.matches)
      }
    this.mdq.addListener(this.mediaQueryListener);

    // console.log('this.urlAssets', this.urlAssets);
  }

  ngOnInit(): void {
    this.slideConfig = {
      "slidesToShow": this.config.slidesToShow,
      "slidesToScroll": this.config.slidesToScroll,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 2300
    };
  }

  ngOnChanges() {
    this.slides = this.data;
    // console.log('this.slides', this.slides);
    this.slides.forEach((slide:any) => {
      if (slide.Thumbnails != null) {
        if(isMobile.any()){
          slide.img =  slide.Thumbnails.img;
        }
      }
    });
}

  ngAfterViewInit(){}

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e:any) {
    // console.log('slick initialized');
  }

  breakpoint(e:any) {
    // console.log('breakpoint');
  }

  afterChange(e:any) {
    // console.log('afterChange');
  }

  beforeChange(e:any) {
    // console.log('beforeChange');
  }




}
