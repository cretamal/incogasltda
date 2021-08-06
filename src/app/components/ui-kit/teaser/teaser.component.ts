import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {
  @Input() Theme:any;
  constructor() { }

  ngOnInit(): void {
  }

}
