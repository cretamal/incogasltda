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
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f() { return this.formData.controls; }

  onSubmit(){
    if(this.formData.valid){


      const dataForm = {
        name: this.formData.controls['name'].value,
        business: this.formData.controls['business'].value,
        email: this.formData.controls['email'].value,
        message: this.formData.controls['message'].value
      }
      console.log(dataForm);

      this.contactService.sendMessageContact(dataForm).subscribe( contact => {
        console.log('contact', contact);
      });



    }else {
      alert('ingresar campos');
    }
  }
}
