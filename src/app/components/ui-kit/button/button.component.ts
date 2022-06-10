import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() Theme:any;
  @Input() Label:any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log('Label', this.Label);
  }

}
