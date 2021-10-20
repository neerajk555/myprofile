import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userName: any;
  email: any;
  nickName: any;
  message: any;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    } }

}
