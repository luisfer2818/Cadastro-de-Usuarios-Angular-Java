import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private urlApiNode: string = '/api/';

  constructor(private http: HttpClient) {}

  public getFindAllUrls(): Observable<any> {
    return this.http.get<any>(`${this.urlApiNode}/listar/urls`);
  }

  public getFindAllPessoas(): Observable<any> {
    return this.http.get<any>(`${this.urlApiNode}/pessoas`);
  }

  public getEncurtarUrl(url: any): Observable<any> {
    return this.http.post(`${this.urlApiNode}/shorten`, url).pipe(
      (res) => res,
      (error) => error
    );
  }

  public getDeleteUrl(hash: string): Observable<any> {
    return this.http.delete(`${this.urlApiNode}/${hash}`).pipe(
      (res) => res,
      (error) => error
    );
  }
}
