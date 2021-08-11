import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData:any = FormGroup;
  submitted = false;
  @Input() Theme:any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      business: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f() { return this.formData.controls; }

}
