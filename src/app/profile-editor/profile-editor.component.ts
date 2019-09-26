import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

    
  constructor(private fb: FormBuilder) { }
  
  profileForm = this.fb.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    lastName: new FormControl(['']),
    address: this.fb.group({
      street: new FormControl(['']),
      city: new FormControl(['']),
      state: new FormControl(['']),
      zip: new FormControl([''])
    }),
  });

  

  ngOnInit() {
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: new FormControl(['Nancy']),
      address: {
        street: new FormControl(['123 Drew Street'])
      }
    });
  }

  onSubmit() {
    console.log(this.profileForm)
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
}
