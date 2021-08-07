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
  @Input() Data:any;
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.data_works = this.Data;
  }

  gotoLink(params:any){
    this.router.navigate(['/services/details', params]);

  }

}
