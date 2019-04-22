import { Component, OnInit } from '@angular/core';

import { EventEmitterService } from './../services/event-emitter.service';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

    sub = 0;
  constructor() {

  }
  usuario = [{
    "nome": "Natalie Vieira",
    "recebeu": "Convite extra",
    "amigo": "eduardo Costa"
  }

  ]
  eventos = [
    {
      "Dados": 1,
      "Recebendo": "dados para ntoa fiscal"
    },
    {
      "Dados": 2,
      "Recebendo": " dados para troca de usuário"
    }
  ]
  obj = [
    {

      "title": "Movimento LGBT",
      "dataPrevistaInicio": "2019-04-20T08:00:00",
      "dataPrevistaTermino": "2019-04-25T05:00:00",
      "dataRealInicio": "2019-04-10T00:00:00",
      "dataRealTermino": "2019-04-10T00:00:00",
      "tempoEsforcoPrevisto": 132,
      "tempoEsforcoReal": 132,
      "status": 3,
      "prioridade": 2,
      "responsavel": null,
      "usuarioId": 2

  },
  {

    "title": "Cruzada",
    "dataPrevistaInicio": "2019-04-20T08:00:00",
    "dataPrevistaTermino": "2019-04-25T05:00:00",
    "dataRealInicio": "2019-04-10T00:00:00",
    "dataRealTermino": "2019-04-10T00:00:00",
    "tempoEsforcoPrevisto": 132,
    "tempoEsforcoReal": 132,
    "status": 3,
    "prioridade": 2,
    "responsavel": null,
    "usuarioId": 2

},
{

  "title": "Sobre o Morro",
  "dataPrevistaInicio": "2019-04-20T08:00:00",
  "dataPrevistaTermino": "2019-04-25T05:00:00",
  "dataRealInicio": "2019-04-10T00:00:00",
  "dataRealTermino": "2019-04-10T00:00:00",
  "tempoEsforcoPrevisto": 132,
  "tempoEsforcoReal": 132,
  "status": 3,
  "prioridade": 2,
  "responsavel": null,
  "usuarioId": 2

}

]

  ngOnInit() {
    this.botaoClick();
    // this.enviar();

  }

  botaoClick() {
    EventEmitterService.get('meClicouEvent').emit({ nome: "Gleison", idade: 25, DataNascimento: "25/03/1998"});
  }
  enviar(){


    EventEmitterService.get('EnviarTarefa').emit(this.obj);
    EventEmitterService.get('EnviarDados').emit(this.eventos);
    EventEmitterService.get('Usuario').emit(this.usuario);
    this.sub++;
    console.log(this.sub);


  }


}
