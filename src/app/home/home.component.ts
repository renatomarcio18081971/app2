import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] = this.ofertaService.obterOfertas() /*| undefined*/

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.ofertaService.obterOfertas()
    console.log(this.ofertas)
  }

}
