import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
//import { Observable } from 'rxjs/internal/Observable';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { /*interval, Observer, Subscription*/ } from 'rxjs'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})

export class OfertaComponent implements OnInit {

  // private tempoObservableSubscription!: Subscription
  // private meuObservableSubscription!: Subscription

  public oferta?: Oferta | undefined
  
  constructor(
                private route: ActivatedRoute, 
                private ofertaService: OfertasService
             ) { }

  ngOnInit(): void {
      let id = this.route.snapshot.params['id']
      if (id !== undefined){
          this.oferta = this.ofertaService.obterOfertaPorId(id)
      }

      // let tempo = interval(2000)
      
      // this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      //     console.log(intervalo)
      // })

      // let meuObservable = new Observable((observer: Observer<number>) => {
      //     observer.next(1)
      //     observer.next(3)
      //     observer.complete()
      //     //observer.error('erro encontrado !')
      // })

      // this.meuObservableSubscription = meuObservable.subscribe(
      //   (resultado: number) => console.log(resultado + 10),
      //   (erro: string) => { console.log(erro) },
      //   () => console.log('stream finalizada !')
      // )
  }

  // ngOnDestroy(): void {
  //     this.meuObservableSubscription.unsubscribe();
  //     this.tempoObservableSubscription.unsubscribe();
  // }
}
