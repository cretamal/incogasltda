import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-scroll-to',
  templateUrl: './scroll-to.component.html',
  styleUrls: ['./scroll-to.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollToComponent implements OnInit, AfterViewInit {
  @Input() Theme:any;
  @ViewChild('el')
  el!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }

}
function viewChild(arg0: string) {
  throw new Error('Function not implemented.');
}

