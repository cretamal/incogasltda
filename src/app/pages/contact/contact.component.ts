import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('tableCoti') tableCoti!: ElementRef;


  formData:any = FormGroup;
  sendMail:boolean = false;
  submitted = false;
  onBreadCrumbs:boolean = false;
  @Input() Theme:any = 'contact-primary';
  isVisible:boolean = false;
  isVisibleCoti:boolean = false;
  clave:any = "store-products";
  cotizacion:any = [];
  productos:any = [];
  alertDeleteCoti:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private modal: NzModalService
  ) {

    if(this.router.url === '/contacto'){
      this.onBreadCrumbs = true;
    }

  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      rut: ['', Validators.required],
      phone: [''],
      business: [''],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: [''],
    });
  }

  ngAfterViewInit(){}


  get f() { return this.formData.controls }

  onSubmit(){
    this.submitted = true;
    if(this.formData.valid){
      this.sendMail = true;

      const dataForm = {
        name: this.formData.controls['name'].value,
        business: this.formData.controls['business'].value,
        email: this.formData.controls['email'].value,
        message: this.formData.controls['message'].value
      }
      // console.log(dataForm);
      const cotizacionActiva = this.getCotizacion();

      if(cotizacionActiva.length > 0){
        this.isVisibleCoti = true;
      } else {
        this.isVisibleCoti = false;
      }




      // this.contactService.sendMessageContact(dataForm).subscribe( (contact:any) => {
      //     console.log('contact', contact);
      //     if(contact['code'] == 200){
      //       this.saveContact();
      //       this.isVisible = true;
      //       this.formData.reset();
      //       this.sendMail = false;
      //     }
      // });
      this.submitted = false;
    }

  }

  saveContact(){
    const payload = {
      "name": this.formData.controls['name'].value,
      "rut": this.formData.controls['rut'].value,
      "phone": this.formData.controls['phone'].value,
      "business":this.formData.controls['business'].value,
      "message": this.formData.controls['message'].value,
      "email": this.formData.controls['email'].value
    };

    this.contactService.saveContact(payload).subscribe( (respSaveContact:any) => {
      console.log('respSaveContact', respSaveContact);
    });
  }

  getCotizacion(){
    const storeShopping = localStorage.getItem(this.clave);
    if(storeShopping != null){
     return this.cotizacion = JSON.parse( storeShopping);
    }

  }

  handleOk(){
    this.isVisible = false;
  }

  enviarCoti(){
    this.isVisibleCoti = false;
  }

  eliminarCoti($event:any){
    this.error();
  }

  error(): void {
    this.modal.error({
      nzTitle: '¡ ELIMINARA SU COTIZACIÓN !',
      nzContent: 'Estas a un paso de eliminar todos los productos seleccionados para enviar a cotizar',
      nzOnOk: () => {
        this.shoppingCartService.deleteAll();
        this.isVisibleCoti  = false;
        this.sendMail       = false;
      }
    });
  }





}
