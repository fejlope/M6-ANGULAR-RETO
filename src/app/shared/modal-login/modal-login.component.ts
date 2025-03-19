import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {
  @Output() cerrar = new EventEmitter<void>();
  
  cerrarModal() {
    this.cerrar.emit();
  }
}
