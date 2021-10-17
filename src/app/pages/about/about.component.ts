import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  dataPage:any = [];
  constructor(
    private contentService: ContentService,
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.contentService.getContentType('?type=page').subscribe( (contentType) => {
      const itemFilter = contentType.find((item:any) => item.title === 'Somo Incogas');
      // console.log('itemFilter:', itemFilter);
      this.dataPage = itemFilter;
    });
  }


}
