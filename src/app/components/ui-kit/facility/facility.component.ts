import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import * as qs from 'qs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {
  data_facility:any = null;
  urlAssets:any;

  constructor(
    private homePageService: HomePageService,
  ) {
    this.urlAssets = environment.server;
  }

  ngOnInit(): void {
    this.getDataFacility();
  }

  getDataFacility(){
    // QUERY QUE TRAE LOS COMPONENTES ANIDADOS + IMAGENES
     // QUERY QUE TRAE LOS COMPONENTES ANIDADOS + IMAGENES
     const query = qs.stringify({
      populate: ['*', 'ShortCut', 'ShortCut.web_img.media', 'ShortCut.movil_img.media'],
    }, {
      encodeValuesOnly: true,
    });
    this.homePageService.getDataPage(`?${query}`).subscribe( (shortCut) => {
      this.data_facility = shortCut.data[0].attributes.ShortCut;
      // console.log('this.data_facility', this.data_facility);
      // this.data_heaSHortCut = shortCut.data[0].attributes.headShortCut;
      // console.log('this.data_shortcut', shortCut.data[0].attributes.headShortCut);
    });
  }

}
