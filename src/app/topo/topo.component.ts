import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(valorDoCampoPesquisa: string): void {
      console.log(valorDoCampoPesquisa)
  }
}
