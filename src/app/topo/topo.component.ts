import { Component, OnInit } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'


import { mergeMap, switchMap, retry, 
  map, catchError, filter, scan, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})

export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    // this.ofertas = this.subjectPesquisa.pipe(
    //     switchMap((consulta: string) => {
    //     return this.ofertaService.pesquisaOfertas(consulta)
    // }))
    // this.ofertas.subscribe((ofertas: Oferta[]) => {
    //   console.log(ofertas)
    // })

    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      switchMap((consulta: string) => {
      if(consulta.trim() === ''){
         return new Observable<Oferta[]>()
      }  
      return this.ofertaService.pesquisaOfertas(consulta)
  }))
  this.ofertas.subscribe((ofertas: Oferta[]) => {
    console.log(ofertas)
  })    
  }

  public pesquisa(valorDoCampoPesquisa: string): void {
    console.log('keyup caracter: ', valorDoCampoPesquisa)
    this.subjectPesquisa.next(valorDoCampoPesquisa);
    // if(valorDoCampoPesquisa !== '' && valorDoCampoPesquisa !== undefined){
    //     let retorno = this.ofertaService.pesquisaOfertas(valorDoCampoPesquisa)
    //                                     .subscribe(
    //                                                 resultado => { 
    //                                                     if(resultado !== undefined){
    //                                                       console.log(resultado) 
    //                                                     }
    //                                                     else {
    //                                                       console.log('não encontroou registros')
    //                                                     }
    //                                                   },
    //                                                   (erro) => { console.log(' Erro status : '.concat(erro.status)) }
    //                                           )
    //     console.log(retorno)
    //   }
  }
}
