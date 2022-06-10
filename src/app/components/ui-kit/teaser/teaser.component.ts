import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import * as qs from 'qs';
import { AboutPageService } from 'src/app/services/about-page.service';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeaserComponent implements OnInit {
  @Input() Theme:any;
  data_teaser:any = [];
  constructor(
    private homePageService: HomePageService,
    private aboutPageService: AboutPageService,
  ) { }


  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(){
    // QUERY QUE TRAE LOS COMPONENTES ANIDADOS
    const query = qs.stringify({
      populate: ['*'],
    }, {
      encodeValuesOnly: true,
    });
    this.aboutPageService.getDataPage(`?${query}`).subscribe( (dataAbout) => {
      this.data_teaser = dataAbout.data[0].attributes.we_are;
      console.log('data_about', dataAbout.data[0].attributes.we_are);
    });
  }



}
