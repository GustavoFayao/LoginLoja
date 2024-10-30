import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";  
  signUpForm!: FormGroup;
  constructor(private fb : FormBuilder){}


  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      nome: ['',Validators.required],
      sobreNome: ['',Validators.required],
      userName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    })



  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }
  
  }
  