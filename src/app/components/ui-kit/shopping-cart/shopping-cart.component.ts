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
  shoppingCart: FormGroup;
  formArray:                                          any;
  tempFormArray:any = [];


  formGroup:any = FormGroup;


  constructor(
    private shoppingCartService: ShoppingCartService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder
  ) {
    this.shoppingCart = this.formBuilder.group({
      productsCant:  new FormArray([])
    });
  }

  ngOnInit(): void {

    this.formGroup = this.fb.group({
      address: this.fb.group({
        street: [''],
      }),
      productsCant: this.fb.array([])
    });
    const fa = (this.formGroup.get('productsCant')as FormArray);
    this.addNewAlias();

  }
  addNewAlias(){
    const fa = (this.formGroup.get('productsCant')as FormArray);
    fa.push(this.fb.group({
      name: ['']
    }));
  }
  deleteAlias(i:number){
    const fa = (this.formGroup.get('productsCant')as FormArray);
    fa.removeAt(i);
    if(fa.length===0){
      this.addNewAlias();
    }
  }



  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.addItems();
    // },1000);
  }

  // addItems(){
  //   this.shoppingCartService.getShoppingCart
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe(resp => {
  //     if (resp) {
  //       this.productsItems = resp;
  //       this.unsubscribe$.complete();
  //       console.log('resp', resp);
  //       this.productsForm.clear();
  //       this.addItemFornControl();
  //     }
  //   });
  // }

  // get productsForm():FormArray{
  //   return this.shoppingCart.get('productsCant') as FormArray;
  // }

  // createProductForm(product:any):FormGroup{
  //   return this.formArray.controls.push(this.formBuilder.group({
  //     id:product.id,
  //     title:product.title,
  //     price:product.price,
  //     thumb:product.img.url,
  //     cantidades: 1
  //   }));
  // }

  // addItemFornControl(){
  //   this.formArray = this.productsForm;
  //   this.productsItems.forEach((product:any) => {
  //     this.createProductForm(product);
  //   });
  // }

  deleteItem(id:number){
    this.shoppingCartService.quitar(id);
    // this.productsItems = this.shoppingCartService.obtener();
    console.log('delete item');
  }

  handlerChange($event:any, id:any){
    console.log('handlerChange', {
      '$event': $event,
      'id': id
    });

  }

  // findElementFormControls(id:any){
  //   return this.formArray.controls.find((element:any)  => element.value.id === id );
  // }

  submit(){
    console.log('submit', this.shoppingCart.controls['productsCant'].value);
  }









}
