import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  registerForm : FormGroup;
  public imagePath;
  imgURL: any=[];
  public message: string;

    constructor(
      private formBuilder: FormBuilder,
      private router : Router,
      
  
     
    ) { }
  
    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        description: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
    });
    }
    get f(){return this.registerForm.controls;}
    onSubmit(){
     this.displayStyle = "block";
  
    }
    displayStyle = "none";

    closePopup() {
      this.displayStyle = "none";
    }
    
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL.push(reader.result); 
    }
  }
}
