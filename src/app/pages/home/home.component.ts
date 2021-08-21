import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ContentService } from './../../services/content.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data_works:any = [];
  data_products:any = [];

  constructor(private contentService: ContentService) {

    this.data_works = [
      {id:0, type:'services', params:'0', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
      {id:1, type:'services', params:'1', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    ];
    this.data_products = [
      {id:0, type:'products', params:'0', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
      {id:1, type:'products', params:'1', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
      {id:2, type:'products', params:'2', title:'Lorem Ipsum', message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'}
    ];
  }


  ngOnInit(): void {
    this.getAllContent();
  }

  getAllContent(){
    this.contentService.getAll().subscribe( (content) => {
      console.log('content', content);
    });
  }



}
