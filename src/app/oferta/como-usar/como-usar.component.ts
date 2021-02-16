import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ComoUsarService } from 'src/app/como-usar.service';
import { ComoUsar } from 'src/app/shared/como-usar.model';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ComoUsarService]
})
export class ComoUsarComponent implements OnInit {

  private comoUsar: ComoUsar | undefined
  public textoComoUsar: string | undefined
  
  constructor(
                private route: ActivatedRoute,
                private comoUsarService: ComoUsarService
              ) { }

  ngOnInit(): void {
    let id = this.route.parent?.snapshot.params['id']
    if (id !== undefined){
        this.comoUsar = this.comoUsarService.obterComoUsarPorId(id)
        this.textoComoUsar = this.comoUsar.descricao
    }
  }

}
