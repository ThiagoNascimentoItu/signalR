import { EventEmitterService } from './../services/event-emitter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recebe2',
  templateUrl: './recebe2.component.html',
  styleUrls: ['./recebe2.component.css']
})
export class Recebe2Component implements OnInit {

  tarefas: any[];

  constructor() {
    EventEmitterService.get('EnviarTarefa').subscribe( obj => this.colocarTimeLine(obj));
   }

  ngOnInit() {
  }
  colocarTimeLine(e) {
    this.tarefas = e;
  }

}
