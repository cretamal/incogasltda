import { Component, OnInit, SecurityContext, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import * as qs from 'qs';
import { ServicesService } from 'src/app/services/services.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-details-services',
  templateUrl: './details-services.component.html',
  styleUrls: ['./details-services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsServicesComponent implements OnInit {
  nameServices:any = 'default';
  idParamRoute:any;
  dataPage:any = [];
  viewPdf:boolean = false;
  urlAssets:any;
  currentPdfView:any = null;

  // :::::: SLICKJS CONFIGURATION :::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::
  slides_data:any  = [];
  config_slide:any = {
    slidesToShow:3,
    slidesToScroll:3
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private servicesService: ServicesService,
    private sanitizer: DomSanitizer,
  ) {
    this.urlAssets = environment.server;
    this.idParamRoute = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.findService();
  }

  findService(){
    const query = qs.stringify({
      populate: ['*', 'services', 'services.Description', 'services.Use', 'services.Materials', 'services.Security', 'services.icon.media', 'services.bigBanner.media'],
      filters: {
        id: {
          $eq: this.idParamRoute,
        },
      },
    }, {
      encodeValuesOnly: true,
    });
    this.categoryService.getAll(`?${query}`).subscribe( (category) => {
      const currentService  = category.data[0].attributes.services
      this.dataPage         = currentService.data[0].attributes;
      this.currentPdfView   = this.dataPage.namePDF;

      console.log('this.currentPdfView', this.currentPdfView);

      // const urlPdf = this.urlAssets+this.dataPage?.pdf?.data?.attributes?.url;
      // this.currentPdfView = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(urlPdf));
      // console.log('this.currentPdfView', this.currentPdfView);
      // this.currentPdfView = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentPdfView);
    });
  }

  viewPdfInline(){
    this.viewPdf = true;
  }
  closePdfInline(){
    this.viewPdf = false;
  }

}
