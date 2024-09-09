import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // @Input() products: product[] | null = [];
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get name(){
    return this.contactForm.get('name') as FormControl
  }
  get email(){
    return this.contactForm.get('email') as FormControl
  }

  handleSubmit(){
    if(this.contactForm.invalid)return;
    alert("Enviado")
  }
}
