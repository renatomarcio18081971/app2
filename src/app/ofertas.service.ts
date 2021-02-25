import { Observable } from 'rxjs'
import { Oferta } from './shared/oferta.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable()
export class OfertasService {

    private API: string = "https://localhost:44347/api/";

    constructor(
                    private http: HttpClient
                ) {}

    public obterOfertas(): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(this.API.concat("ofertas"))
    }

    public obterOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        let pesquisa = this.API.concat("ofertas/", categoria, "/categoria")
        return this.http.get<Oferta[]>(pesquisa)
    }

    public obterOfertaPorId(id: number): Observable<Oferta> {
        let pesquisa = this.API.concat("ofertas/", id.toString())
        return this.http.get<Oferta>(pesquisa)
    }

    public pesquisaOfertas(valor: string): Observable<Oferta[]> {
        let pesquisa = this.API.concat(valor.toString(), "/descricaooferta")
        return this.http.get<Oferta[]>(pesquisa);
    }
}