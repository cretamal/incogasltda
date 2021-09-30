import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, AfterViewInit {
  private unsubscribe$: Subject<boolean> = new Subject();
  initValue:any = 1;
  isDisabled:boolean = false;
  productsItems:any = [];
  shoppingCart:                   FormGroup;
  formArray:                                          any;
  tempFormArray:any = [];
  constructor(
    private shoppingCartService: ShoppingCartService,
    private formBuilder: FormBuilder
  ) {

    this.shoppingCart = this.formBuilder.group({
      productsCant: this.formBuilder.array([
        // this.formBuilder.group({
        //   cantidades: '',
        // })
      ])
  });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.addItems();
    },1000);
  }

  addItems(){
    this.shoppingCartService.getShoppingCart
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(resp => {
      if (resp) {
        this.productsItems = resp;
        this.unsubscribe$.complete();
        console.log('resp', resp);
        this.productsForm.clear();
        this.addItemFornControl();
      }
    });
  }

  get productsForm():FormArray{
    return <FormArray> this.shoppingCart.get('productsCant') as FormArray;
  }

  createProductForm(product:any):FormGroup{
    return this.formArray.controls.push(this.formBuilder.group({
      id:product.id,
      title:product.title,
      price:product.price,
      thumb:product.img.url,
      cantidades: ''
    }));
  }

  addItemFornControl(){
    this.formArray = this.productsForm;
    this.productsItems.forEach((product:any) => {
      this.createProductForm(product);
    });
  }

  deleteItem(id:number){
    this.shoppingCartService.quitar(id);
    // this.productsItems = this.shoppingCartService.obtener();
    console.log('delete item');
  }

  handlerChange($event:any){
    console.log('handlerChange', $event);
  }

  submit(){
    console.log('submit', this.shoppingCart.controls['productsCant']);
  }

}
