import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-recebe',
  templateUrl: './recebe.component.html',
  styleUrls: ['./recebe.component.css']
})
export class RecebeComponent implements OnInit {
  sub;
  tarefas = [];
  dados: any[] = [];
  numero = [];

  constructor() {
    // EventEmitterService.get('meClicouEvent').subscribe( obj => console.log(obj));
    EventEmitterService.get('meClicouEvent').subscribe( obj => this.listenerClicou(obj));
    // EventEmitterService.get('EnviarTarefa').subscribe( obj => console.log(obj) );
    EventEmitterService.get('EnviarTarefa').subscribe( obj => this.colocarTimeLine(obj));
    EventEmitterService.get('EnviarDados').subscribe( obj => this.jogar(obj));
   }

  ngOnInit() {

  }
  listenerClicou(e) {
    // console.log(e);
  }
  colocarTimeLine(e) {
    this.numero.splice(0);
    this.tarefas = this.tarefas.concat(e);
    this.numero.push(this.tarefas.length);
  }
  jogar(e) {
    this.dados = e;
  }

}
