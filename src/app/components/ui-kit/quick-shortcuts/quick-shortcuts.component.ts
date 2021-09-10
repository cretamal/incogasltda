import { Component, OnInit } from '@angular/core';
import { ContentService } from './../../../services/content.service';

@Component({
  selector: 'app-quick-shortcuts',
  templateUrl: './quick-shortcuts.component.html',
  styleUrls: ['./quick-shortcuts.component.scss']
})
export class QuickShortcutsComponent implements OnInit {
  data_shortcut:any;
  configServices:any;

  constructor(
    private contentService: ContentService
  ) {
    // this.data_shortcut = [
    //   {id:0, type:'short-cut', params:'0', label:'Despacho 24  hrs', message:'Toda Region Metropolitana', img:'short-cut-1.jpg'},
    //   {id:1, type:'short-cut', params:'1', label:'Paga en cuotas', message:'Hasta 12 cuotas', img:'short-cut-2.jpg'},
    // ];
    this.configServices = {
      theme:'product-shortcuts backgroud-product',
      typeMedia:'background'
    };
  }

  ngOnInit(): void {
    this.getDataShortCuts();
  }

  getDataShortCuts(){
    this.contentService.getContentType('?type=short-cuts').subscribe( (contentType) => {
      this.data_shortcut = contentType;

      console.log('this.data_shortcut', this.data_shortcut);

      console.log('typeof', typeof this.data_shortcut[0].img)
    });
  }

}
