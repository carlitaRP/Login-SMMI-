import { Component } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  matricula: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo:
    if (this.matricula === 'admi' && this.password === 'admi') {
      // Autenticación exitosa
      location.href = '#successPopup';
    } else if (this.matricula.trim() === '' || this.password.trim() === '') {
      // Campos vacíos
      location.href = '#blankFieldsPopup';
    } else {
      // Autenticación fallida
      location.href = '#errorPopup';
    }
  }

  closePopup(popupId: string) {
    location.href = '#'; // Cierra el pop-up redirigiendo a la página principal
  }

  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }
}
