import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviaremail',
  templateUrl: './enviaremail.component.html',
  styleUrls: ['./enviaremail.component.css']
})
export class EnviaremailComponent implements OnInit {

  public email: string = ''
  public senha: string = ''

  constructor() { }

  ngOnInit(): void {
  }


  enviarClique(): void {
      debugger
      let e = this.email
      let s = this.senha
  }

}
