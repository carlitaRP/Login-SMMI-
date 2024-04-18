import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'URL_DEL_API'; // Reemplaza 'URL_DEL_API' con la URL de tu API

  constructor(private http: HttpClient) {}

  loginUser(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, usuario);
  }
}
