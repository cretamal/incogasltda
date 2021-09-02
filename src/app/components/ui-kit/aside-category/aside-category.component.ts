import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-category',
  templateUrl: './aside-category.component.html',
  styleUrls: ['./aside-category.component.scss']
})
export class AsideCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories:any = [];

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryService.getAll().subscribe( (category) => {
      // console.log('category', category);
      this.categories = category;
    });
  }

}
