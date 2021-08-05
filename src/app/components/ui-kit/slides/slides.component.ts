import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

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

  constructor() {

  }

  ngOnInit(): void {
    this.slides = this.data;
    this.slideConfig = {"slidesToShow": this.config.slidesToShow, "slidesToScroll": this.config.slidesToScroll};
    console.log('data-config', this.config);

  }




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
