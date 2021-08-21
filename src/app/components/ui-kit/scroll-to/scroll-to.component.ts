import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import gsap from "gsap";
// import { TweenMax, ScrollToPlugin } from 'gsap/all'
// const plugins = [ ScrollToPlugin ]

declare var window: any;

@Component({
  selector: 'app-scroll-to',
  templateUrl: './scroll-to.component.html',
  styleUrls: ['./scroll-to.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollToComponent implements OnInit {
  @Input() Theme:any;
  // @ViewChild('el') el: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  scrollTop () {
    console.log('window', window);
    // TweenMax.to(this.el.nativeElement, {opacity:0.3,repeat:-1});
  }

}
function viewChild(arg0: string) {
  throw new Error('Function not implemented.');
}

