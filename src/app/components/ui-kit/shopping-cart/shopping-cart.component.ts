import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Products } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';


import gsap from "gsap";
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, AfterViewInit {

  @Input() status:any = 'close';
  isDisabled:boolean = false;
  skillsForm: FormGroup;
  shoppingCart:any = new Products();
  private unsubscribe$ = new Subject();
  viewShoppingCart:boolean = false;
  urlAssets:any;
  delay:any = timer(10000);
  updateShopping:boolean = false;
  isVisible:boolean = false;

  constructor(
    private fb:FormBuilder,
    private shoppingCartService: ShoppingCartService,
    private ref: ChangeDetectorRef
  ) {
    this.urlAssets = environment.server;
    this.skillsForm = this.fb.group({
      // name: '',
      shopCart: this.fb.array([]),
    });

  }

  ngOnInit(): void {
    this.shoppingCart.list = this.shoppingCartService.obtener();
   }

  ngAfterViewInit(): void {
    this.observerShopingCart();
    this.openShoppingCart();
  }

  observerShopingCart(){
    this.shoppingCartService.getShoppingCart
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(resp => {
        if (resp) {
          // console.log('getShoppingCart', resp);
          // if(resp.length > 0){
          //   this.viewShoppingCart = true;
          // }else {
          //   this.viewShoppingCart = false;
          // }

          //  Clear form data cuando recibimos un actualizacion en el observable del carro
          (this.skillsForm.controls['shopCart'] as FormArray).clear();
          // Agregamos los elementos 1 x 1
          resp.forEach((element:any) => {
            // console.log('element',element);
            this.addSkills(element);
          });

        }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  get shopCart() : FormArray {
    return this.skillsForm.get("shopCart") as FormArray
  }

  newSkill(element:any): FormGroup {
    // console.log('newSkill:',element);
    return this.fb.group({
      name: element?.name,
      cantidad: element.cantidad,
      price: element?.price,
      id: element?.id,
      img: element?.img
    })
  }

  addSkills(element:any) {
    this.shopCart.push(this.newSkill(element));
  }

  removeSkill(item:any, i:number) {
    this.shopCart.removeAt(i);
    // console.log('item.controls.value.id', item.controls.id.value);
    this.shoppingCartService.quitar(item.controls.id.value);
  }

  onSubmit() {
    // console.log('aqui', this.skillsForm.value);
  }

  handlerChange(event:any){
    // console.log(event);
  }

  onChangeCant($event:any){
    this.updateShopping = true;
    // console.log('ngModelChange', $event.value);
  }

  confirmItems(){
    this.shoppingCartService.updateStorage(this.skillsForm.value);
  }

  handleOk(){
    this.isVisible = false;
  }

  handleCancel(){
    this.isVisible = false;
  }

  openShoppingCart(){
    this.shoppingCartService.getstatusShoppingCart
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(resp => {
        if (resp === true) {
          this.viewShoppingCart = true;
          // alert('abrir panel');
        }else {
          this.viewShoppingCart = false;
          // alert('cerrar panel');
        }
    });
  }


  closeShoppingCart(){
    this.shoppingCartService.closeStatusShoppingCart();
  }




}
