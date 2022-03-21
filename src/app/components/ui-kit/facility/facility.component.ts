import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import * as qs from 'qs';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {
  data_facility:any;

  constructor(
    private homePageService: HomePageService,
  ) { }

  ngOnInit(): void {
    this.getDataFacility();
  }

  getDataFacility(){
    // QUERY QUE TRAE LOS COMPONENTES ANIDADOS + IMAGENES
    const query = qs.stringify({
      populate: ['*', 'shortCut', 'shortCut.image_web', 'shortCut.image_movil'],
    }, {
      encodeValuesOnly: true,
    });
    this.homePageService.getDataPage(`?${query}`).subscribe( (shortCut) => {
      this.data_facility = shortCut.data[0].attributes.shortCut;
      console.log('this.data_facility', this.data_facility);
    });
  }

}
