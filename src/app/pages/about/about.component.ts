import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as qs from 'qs';
import { AboutPageService } from 'src/app/services/about-page.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  data_about:any = [];
  constructor(
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
      this.data_about = dataAbout?.data[0]?.attributes;
    });
  }
}
