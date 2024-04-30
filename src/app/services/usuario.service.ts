import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public getFindAllUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.url}usuarios`);
  }

  public getSaveUsers(user: any): Observable<Users> {
    return this.http.post<Users>(`${this.url}usuarios`, { user }).pipe(
      (res) => res,
      (error) => error
    );
  }

  public getUpdateUsers(req: any, id: number): Observable<Users> {
    return this.http.put<Users>(`${this.url}usuarios/${id}`, req).pipe(
      (res) => res,
      (error) => error
    );
  }

  public getDeleteUsers(id: number): Observable<Users> {
    return this.http.delete<Users>(`${this.url}usuarios/${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }
}
