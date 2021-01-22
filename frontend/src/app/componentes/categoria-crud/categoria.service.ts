import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.module';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  rotaPadrao = '/categorias'
  rotaBackend = `http://localhost:8080${this.rotaPadrao}`

  constructor(private http: HttpClient) { }

  ler(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.rotaBackend)
  }

  lerPorId(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.rotaBackend}/${id}`)
  }

  criar(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.rotaBackend, categoria)
  }

  atualizar(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${this.rotaBackend}/${categoria.id}`, categoria)
  }

  deletar(id: string): Observable<Categoria>{
    return this.http.delete<Categoria>(`${this.rotaBackend}/${id}`)
  }

}
