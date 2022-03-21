import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { NzModalService } from 'ng-zorro-antd/modal';


import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { UploadService } from 'src/app/services/upload.service';
import { Client } from 'src/app/models/client';
import { Order } from 'src/app/models/order';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pdf:any = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
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
  dataFormMail:any;

  dataSaveClient:any = Client;
  dataOrderClient:any = Order;
  getCurretUser:any;
  currentStore:any = [];
  AuxIdRelationOrder:any = [];

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private clientService: ClientService,
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private modal: NzModalService,
    private uploadService: UploadService
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
      this.dataFormMail = {
        name: this.formData.controls['name'].value,
        business: this.formData.controls['business'].value,
        email: this.formData.controls['email'].value,
        message: this.formData.controls['message'].value
      }

      this.sendMailContact();

    }
  }


  sendMailContact(){
    this.currentStore   = this.getCotizacion();
    if(this.currentStore.length > 0) this.saveOrder();

    this.contactService.sendMessageContact(this.dataFormMail).subscribe( (contact:any) => {
      if(contact['code'] == 200){
        this.saveClient();
        this.isVisible = true;
        this.formData.reset();
        this.sendMail = false;
      }
    });
    this.submitted = false;
  }



  async saveClient() {
    this.dataSaveClient = {
      data:  {
        "name": this.formData.controls['name'].value,
        "rut": this.formData.controls['rut'].value,
        "phone": this.formData.controls['phone'].value,
        "email": this.formData.controls['email'].value,
        "product": this.AuxIdRelationOrder.length > 0 ? this.AuxIdRelationOrder : [],
      }
    };
    await this.clientService.save(this.dataSaveClient).subscribe( (respSaveContact:any) => {
      if(respSaveContact != undefined){
        this.shoppingCartService.deleteAll();
        console.log('respSaveContact', respSaveContact);
      }
    });
  }

  async updateClient(currentClient:any) {
    this.currentStore   = this.getCotizacion();
    this.dataSaveClient = {
      data:  {
        "product": this.currentStore,
      }
    };
    await this.clientService.update(this.dataSaveClient, currentClient.id).subscribe( (updateClient:any) => {
      if(updateClient != undefined){
        console.log('updateClient', updateClient);
      }
    });
  }

  async saveOrder(){
    await this.currentStore.forEach((item:any) => {
      console.log('item', item);
      const AuxOrder:any =  {
        data: {
          name: `COTI-Nº${item.id.toString()}`,
          sku: item.id.toString(),
          price: item.price,
          units: item.cantidad
        }
      }
      this.contactService.saveOrder( AuxOrder ).subscribe( (respSaveOrder:any) => {
        // console.log('respSaveOrder', respSaveOrder);
        this.AuxIdRelationOrder.push(respSaveOrder.data.attributes);
        console.log('AuxIdRelationOrder', this.AuxIdRelationOrder);
      });
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
    this.saveClient();
    // this.captureScreen();
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


  captureScreen() {
    let data:any  = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      console.log('canvas', canvas);
      // Few necessary setting options
      var imgWidth = 1000;
      var pageHeight = 1000;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      this.uploadService.uploadFile(contentDataURL);

      console.log('contentDataURL', contentDataURL);
      // this.dataSaveContact.quote[0] =  contentDataURL;
      var position = 0;
      this.pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      // pdf.save('MYPdf.pdf'); // Generated PDF

      this.sendMailContact();
      console.log('pdf', this.pdf);

    });
  }


}
