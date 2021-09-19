import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() Config:any;
  @Input() Data:any;

  @Input() Theme:any;
  @Input() TypeMedia = 'background';
  // @Input() Title:any;
  // @Input() Message:any;
  // @Input() Foo:any;

  head:any = "Loren";
  body:any;
  foo:any;
  urlAssets:any;
  typeImg:any;


  constructor(private router: Router) {
    this.urlAssets = environment.server;
  }

  ngOnInit(): void {
    this.typeImg = typeof this.Data.img;
    console.log('this.Data', this.Data);



  }

  callToAction(data:any){
    console.log('callToAction', data.callToAction.url);
    this.router.navigate([`${data.callToAction.url}/${data.id}`]);
  }



}
