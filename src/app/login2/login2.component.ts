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
    if (this.validateMatricula(this.usuario.matricula) && this.validatePassword(this.usuario.password)) {
      this.userService.loginUser(this.usuario)
        .subscribe(
          (response) => {
            this.showToast('successToast');
            // Redireccionar a la página de inicio
            this.router.navigate(['/inicio']); // Reemplaza '/inicio' con la ruta de tu página de inicio
          },
          (error) => {
            this.showToast('errorToast');
          }
        );
    } else {
      this.showToast('errorToast');
    }
  }

  validateMatricula(matricula: string): boolean {
    // Validar la matrícula
    const regex = /^A\d{2}\d{3}$/; 
    return regex.test(matricula);
  }

  validatePassword(password: string): boolean {
    // Validar una contraseña segura
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
