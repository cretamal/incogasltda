import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import { ContentService } from './../../../services/content.service';
import * as qs from 'qs';

@Component({
  selector: 'app-quick-shortcuts',
  templateUrl: './quick-shortcuts.component.html',
  styleUrls: ['./quick-shortcuts.component.scss']
})
export class QuickShortcutsComponent implements OnInit {
  data_heaSHortCut:any ;
  data_shortcut:any;
  configServices:any;

  constructor(
    private homePageService: HomePageService,
  ) {}

  ngOnInit(): void {
    this.getDataShortCuts();
  }

  getDataShortCuts(){
    // QUERY QUE TRAE LOS COMPONENTES ANIDADOS + IMAGENES
    const query = qs.stringify({
      populate: ['*', 'shortCut', 'shortCut.image_web', 'shortCut.image_movil', 'headShortCut'],
    }, {
      encodeValuesOnly: true,
    });

    this.homePageService.getDataPage(`?${query}`).subscribe( (shortCut) => {
      this.data_shortcut = shortCut.data[0].attributes.shortCut;
      this.data_heaSHortCut = shortCut.data[0].attributes.headShortCut;
      console.log('this.data_shortcut', shortCut.data[0].attributes.headShortCut);
    });
  }

}
