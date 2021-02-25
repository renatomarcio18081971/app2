import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})

export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(valorDoCampoPesquisa: string): void {
      debugger;
      let retorno = this.ofertaService.pesquisaOfertas(valorDoCampoPesquisa)
                                      .subscribe(
                                                    (resultado: Oferta[]) => { console.log(resultado) },
                                                    (erro) => { console.log(erro) }
                                            )
      console.log(retorno)
  }
}
