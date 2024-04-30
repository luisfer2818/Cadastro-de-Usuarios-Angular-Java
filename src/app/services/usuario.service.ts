import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  public getFindAll(): Observable<any> {
    return this.http.get<any[]>('http://localhost:8080/usuarios');
  }
}
