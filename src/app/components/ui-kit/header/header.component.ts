import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navMenu:any = [];

  constructor() {
    this.navMenu = [
      {id:0,label:'Link 1', url: 'home'},
      {id:1,label:'Link 2', url: 'home'},
      {id:2,label:'Link 3', url: 'home'},
      {id:3,label:'Link 4', url: 'home'}
    ];
  }

  ngOnInit(): void {
  }

}
