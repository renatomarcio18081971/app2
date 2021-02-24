import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[] | undefined

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
       this.ofertasService.obterOfertasPorCategoria('diversao')
                          .subscribe(resultado => {
                            this.ofertas = resultado
                          })
  }

}
