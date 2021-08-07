import { Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorksComponent implements OnInit {
  data_works:any = [];
  @Input() Theme:any;
  constructor(
    private router: Router,
  ) {
    this.data_works = [
      {id:0, params:'0', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
      {id:1, params:'1', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},

    ];
  }

  ngOnInit(): void {
  }

  gotoLink(params:any){
    this.router.navigate(['/services/details', params]);

  }

}
