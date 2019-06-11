import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  email;
  message;
  recaptcha = false;

  resolved(captchaResponse: string) {
    //console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.contactService.verifyCaptcha(captchaResponse).subscribe(data=>{
      if(data['message'] === "success"){
        this.recaptcha = true;
      }
    })
  }

  ngOnInit() {
  }

  onSubmit(contactForm: NgForm){
    if(this.recaptcha == true){
      this.contactService.sendMessage(this.email,this.message).subscribe();
      window.alert("پیام شما با موفقیت ارسال شد");
      contactForm.resetForm();
    }
  }

}
