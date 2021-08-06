import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Theme:any;
  @Input() Title:any;
  @Input() Message:any;
  @Input() Foo:any;

  head:any = "Loren";
  body:any;
  foo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
