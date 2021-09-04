import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
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
    

  constructor(private router: Router) {
    this.urlAssets = environment.server;
  }

  ngOnInit(): void {
    console.log('Data', this.Data.callToAction)
  }

  callToAction(data:any){
    console.log('callToAction', data);

    this.router.navigate([`/${data.url}`]);
    
  }

}
