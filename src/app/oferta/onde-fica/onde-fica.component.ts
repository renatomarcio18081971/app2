import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OndeFicaService } from 'src/app/onde-fica.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OndeFicaService]
})
export class OndeFicaComponent implements OnInit {

  public textoOndeFica: string | undefined

  constructor(
                private route: ActivatedRoute,
                private ondeFicaService: OndeFicaService
             ) { }

  ngOnInit(): void {
    let id = this.route.parent?.snapshot.params['id']
    if (id !== undefined){
        let onde = this.ondeFicaService.obterOndeFicaPorId(id)
                                       .subscribe(resultado => {
                                          this.textoOndeFica = resultado.descricao
                                       })
    }
  }

}
