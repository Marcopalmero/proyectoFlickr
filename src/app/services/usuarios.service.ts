import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../modelos/usuarios.model';

const baseUrl = 'http://localhost:8080/api/usuarios';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Usuarios[]> {
  return this.http.get<Usuarios[]>(baseUrl);
  }
  get(id: any): Observable<Usuarios> {
  return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
  return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
  return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
  return this.http.delete(baseUrl);
  }
  findByEmail(email: any): Observable<Usuarios[]> {
  return this.http.get<Usuarios[]>(`${baseUrl}?email=${email}`);
  }
}
