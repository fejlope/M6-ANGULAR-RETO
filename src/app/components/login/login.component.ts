import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  mostrarModal = false;
  
  loginForm = this.formBuilder.group({
    username: [''],
    passwd: ['']

  })
  submit() {
    console.log(this.loginForm.getRawValue());
  }

  

  abrirModal(event: Event) {
    event.preventDefault(); // Evita la redirección del link
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

}
