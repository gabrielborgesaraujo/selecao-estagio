import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ContatoModel } from './contato-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseURL = 'http://localhost:8080/api/contatos';

  constructor(private httpClient: HttpClient) { }

  getContatosList(): Observable<ContatoModel[]> {
    return this.httpClient.get<ContatoModel[]>(`${this.baseURL}`);
  }

  createContato(contato: ContatoModel, file: File): Observable<Object> {
    const formData = new FormData();
    formData.append('contato', new Blob([JSON.stringify(contato)], {type: "application/json"}));
    formData.append('image', file);
    console.log(formData.get('contato'));
    return this.httpClient.post<FormData>(`${this.baseURL}`, formData);
    
  }

  getContatoById(id: number): Observable<ContatoModel> {
    return this.httpClient.get<ContatoModel>(`${this.baseURL}/${id}`);
  }
  
  upadateContato(id: number, contato: ContatoModel): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, contato);
  }

  deleteContato(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
