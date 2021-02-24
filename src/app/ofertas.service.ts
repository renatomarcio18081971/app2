import { Observable } from 'rxjs'
import { Oferta } from './shared/oferta.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

    private API: string = "https://localhost:44347/api/";

    constructor(private http: HttpClient) {}

    public obterOfertas(): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(this.API.concat("ofertas"))
    }

    public obterOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        let str = this.API.concat("ofertas/", categoria, "/categoria")
        return this.http.get<Oferta[]>(str)
    }

    public obterOfertaPorId(id: number): Observable<Oferta> {
        let str = this.API.concat("ofertas/", id.toString())
        return this.http.get<Oferta>(str)
    }

    // public pesquisaOfertas(valor: string): Oferta[] {
    //     let pesquisa = this.ofertas.filter(x => x.descricao_oferta == valor)
    //     return pesquisa
    // }
}