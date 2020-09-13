import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rfs',
  templateUrl: './rfs.component.html',
  styleUrls: ['./rfs.component.scss']
})
export class RfsComponent {

  loginForm : FormGroup
  
  onSubmit(){
    console.log(this.loginForm.value)
  }

  constructor(
    private formbuilder: FormBuilder
  ) { 
    this.loginForm = formbuilder.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    number: ['', Validators.required],
    date: [''],
    Govt: [''],
    town: [''],
    ward: [''],
    village: [''],
    occupation: [''],
    })
  }

  ngOnInit(): void {
  }

}
