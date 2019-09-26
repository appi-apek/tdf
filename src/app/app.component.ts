import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics=['Angular','java'];
  messageForm: FormGroup;
  submitted = false;
  success = false;


  //usermodel= new User('app', 'app@test.com',8765490876,'');
  //Status: boolean = true; 
   clicked(event) { 
      //this.Status = false; 
   } 

   onBlurMethod(){
    alert(this.title) 
   }
  
  constructor(private formBuilder: FormBuilder) { 
    console.log(this.title)
  }

  // ngOnInit() {
  //   this.messageForm = this.formBuilder.group({
  //     name: ['', Validators.required],
      
  //   });
  }

//   onSubmit() {
//     this.submitted = true;

    
// }

//   public companies: any[] = [
//     { "id": 0, "name": "Available" },
//     { "id": 1, "name": "Ready" },
//     { "id": 2, "name": "Started" }
// ];




  
  

