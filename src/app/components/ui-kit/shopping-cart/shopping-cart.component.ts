import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product, Products } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, AfterViewInit {
  isDisabled:boolean = false;
  skillsForm: FormGroup;
  shoppingCart:any = new Products();

  constructor(
    private fb:FormBuilder,
    private shoppingCartService: ShoppingCartService,
  ) {

    this.skillsForm = this.fb.group({
      // name: '',
      shopCart: this.fb.array([]),
    });

  }

  ngOnInit(): void {
    this.shoppingCart.list = this.shoppingCartService.obtener();
   }

  ngAfterViewInit(): void {
    this.shoppingCart.list.forEach((element:any) => {
      console.log('element', element);
      this.addSkills(element);
    });
  }







  get shopCart() : FormArray {
    return this.skillsForm.get("shopCart") as FormArray
  }

  newSkill(element:any): FormGroup {
    return this.fb.group({
      name: element?.title,
      cant: '1',
      price: element?.price
    })
  }

  addSkills(element:any) {
    this.shopCart.push(this.newSkill(element));
  }

  removeSkill(i:number) {
    this.shopCart.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }



  handlerChange(event:any){
    console.log(event);
  }

}
