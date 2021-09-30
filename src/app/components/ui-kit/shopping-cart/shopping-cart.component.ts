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
    this.formArray = <FormArray> this.shoppingCart.controls.productsCant;
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
        console.log('shopping cart - productsItems', resp);
        this.addItemFornControl();
      }
    });
  }

  addItemFornControl(){
    this.productsItems.forEach((product:any) => {
      // console.log('addItemFornControl', product);
      this.formArray.push(this.formBuilder.group({
        title:product.title,
        price:product.price,
        thumb:product.img.url,
        cantidades: ''
      }));
    });


    console.log('this.formArray', this.formArray.controls);
  }

  deleteItem(id:number){
    this.shoppingCartService.quitar(id);
    this.productsItems = this.shoppingCartService.obtener();
  }

  handlerChange($event:any){
    console.log('handlerChange', $event);
  }

  submit(){
    console.log('submit', this.shoppingCart.controls['productsCant']);
  }

}
