import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData:any = FormGroup;
  sendMail:boolean = false;
  submitted = false;
  @Input() Theme:any = 'contact-primary';
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      business: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', Validators.required],
    });

  }

  get f() { return this.formData.controls; }

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
      console.log(dataForm);

      this.contactService.sendMessageContact(dataForm).subscribe( (contact:any) => {
          if(contact['code'] == 200){
            alert('mensage enviado con exito');
            this.formData.reset();
            this.sendMail = false;
          }
      });
      this.submitted = false;
    }else {

    }
  }
}
