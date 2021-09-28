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
        this.formBuilder.group({
          cantidades: '',
        })
      ])
  });
  }

  ngOnInit(): void {
    this.formArray = <FormArray> this.shoppingCart.controls.productsCant;
  }

  ngAfterViewInit(): void {

    this.productsItems = this.shoppingCartService.obtener();

    console.log('this.productsItems:', this.productsItems);



    // this.addItems();
  }

  addItems(){
    this.shoppingCartService.getShoppingCart
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(resp => {
      if (resp) {
        this.productsItems = resp;
        this.unsubscribe$.complete();
        console.log('productsItems', resp);
      }
    });
  }

  deleteItem(id:number){
    this.shoppingCartService.quitar(id);
    this.productsItems = this.shoppingCartService.obtener();
  }

  handlerChange($event:any){
    console.log('handlerChange', $event);
  }

  submit(){
    console.log('submit', this.shoppingCart.controls);
  }

}
