import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data_works:any = [];
  data_products:any = [];

  constructor() {
    this.data_works = [
      {id:0, params:'0', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
      {id:1, params:'1', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    ];
    this.data_products = [
      {id:0, params:'0', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
      {id:1, params:'1', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
      {id:2, params:'2', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
      {id:3, params:'3', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'}
    ];
  }


  ngOnInit(): void { }



}
