import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Usuario } from '../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  usuario: Usuario = {
    matricula: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (!this.usuario.matricula || !this.usuario.password) {
      // Mostrar toast de campos vacíos
      this.showToast('blankFieldsToast');
      return; // Detener el proceso de inicio de sesión
    }

    if (this.validateMatricula(this.usuario.matricula) && this.validatePassword(this.usuario.password)) {
      this.userService.loginUser(this.usuario)
        .subscribe(
          (response) => {
            if (response.success) {
              // Mostrar toast de autenticación exitosa
              this.showToast('successToast');
              // Redireccionar a la página de inicio
              this.router.navigate(['/inicio']); // Reemplaza '/inicio' con la ruta de tu página de inicio
            } else {
              // Mostrar toast de autenticación fallida
              this.showToast('errorToast');
            }
          },
          (error) => {
            // Mostrar toast de autenticación fallida
            this.showToast('errorToast');
          }
        );
    } else {
      // Mostrar toast de autenticación fallida
      this.showToast('errorToast');
    }
  }

  validateMatricula(matricula: string): boolean {
    // Validar la matrícula según los requisitos
    const regex = /^A\d{2}\d{3}$/; // Matrícula: A + dos dígitos de año + tres dígitos aleatorios
    return regex.test(matricula);
  }

  validatePassword(password: string): boolean {
    // Validar la contraseña según las características de una contraseña segura
    // Por ejemplo, al menos 8 caracteres, al menos una letra minúscula, al menos una letra mayúscula, al menos un número
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }

  showToast(toastId: string) {
    const toast = document.getElementById(toastId);
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000); 
    }
  }

  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }
}


