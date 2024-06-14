import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlApiJava: string = '/api/';

  constructor(private http: HttpClient) {}

  public getFindAllUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.urlApiJava}/usuarios`);
  }

  public getSaveUsers(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.urlApiJava}usuarios`, { user }).pipe(
      (res) => res,
      (error) => error
    );
  }

  public getUpdateUsers(req: any, id: number): Observable<Users> {
    return this.http.put<Users>(`${this.urlApiJava}usuarios/${id}`, req).pipe(
      (res) => res,
      (error) => error
    );
  }

  public getDeleteUsers(id: number): Observable<Users> {
    return this.http.delete<Users>(`${this.urlApiJava}usuarios/${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }
}
