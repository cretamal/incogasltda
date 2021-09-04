import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
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

  constructor() {
    this.urlAssets = environment.server;
    console.log('this.urlAssets', this.urlAssets);
  }

  ngOnInit(): void {
    this.slideConfig = {"slidesToShow": this.config.slidesToShow, "slidesToScroll": this.config.slidesToScroll};
  }

  ngOnChanges() {
    this.slides = this.data;
    console.log('this.slides', this.slides);
}

  ngAfterViewInit(){}

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e:any) {
    console.log('slick initialized');
  }

  breakpoint(e:any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');
  }

  beforeChange(e:any) {
    console.log('beforeChange');
  }




}
