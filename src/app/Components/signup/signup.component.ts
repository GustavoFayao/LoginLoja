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
  onSignup(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)
    }else{
      console.log("formulario esta incorreto!!")
      
      this.validateAllFormFields(this.signUpForm)   
      alert("Erro Algo esta incorreto!!")
    }

  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
            control.markAsDirty({ onlySelf: true });
        } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
        }
    });
  }


  }
  