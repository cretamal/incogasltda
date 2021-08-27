import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.scss']
})
export class PageLoadingComponent implements OnInit {

  @Input() activeLoad:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
