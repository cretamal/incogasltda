import { CategoryService } from './../../../services/category.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import * as qs from 'qs';

@Component({
  selector: 'app-aside-category',
  templateUrl: './aside-category.component.html',
  styleUrls: ['./aside-category.component.scss']
})
export class AsideCategoryComponent implements OnInit {
  @Output() Product = new EventEmitter<any>();



  constructor(
    private categoryService: CategoryService
  ) { }

  categories:any = [];


  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getAllCategory();
  }

  getAllCategory(){
    const query = qs.stringify({
      populate: ['*'],
    }, {
      encodeValuesOnly: true,
    });
    this.categoryService.getAll(query).subscribe( (category) => {
      // console.log('category', category);
      this.categories = category;
    });
  }

  handlerSubCategory(product:any){
    // console.log('product', product);
    this.getResultSubCategory(product);
  }

  getResultSubCategory(product:any){
    // console.log('getResultSubCategory', product);
    this.Product.emit(product);



  }

}
