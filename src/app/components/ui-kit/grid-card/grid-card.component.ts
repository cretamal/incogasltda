import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridCardComponent implements OnInit {
  data_works:any = [];
  @Input() Theme:any;
  @Input() Data:any;
  @Input() ConfigChildren:any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.data_works = this.Data;

    console.log('this.data_works',  this.data_works);


  }

  gotoLink(type:any, params:any){
    //  type => seccion / tipo / producto
    // params => id que realiza la ralaciión
    this.router.navigate([`/${type}/details`, params]);
  }

}
