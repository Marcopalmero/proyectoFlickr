import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../modelos/imagen.model';

const baseUrl = 'http://localhost:8080/api/imagenes';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Imagen[]> {
  return this.http.get<Imagen[]>(baseUrl);
  }
  get(id: any): Observable<Imagen> {
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
  findByTitulo(titulo: any): Observable<Imagen[]> {
  return this.http.get<Imagen[]>(`${baseUrl}?titulo=${titulo}`);
  }
}
