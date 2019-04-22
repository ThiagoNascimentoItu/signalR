import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-recebe3',
  templateUrl: './recebe3.component.html',
  styleUrls: ['./recebe3.component.css']
})
export class Recebe3Component implements OnInit {
  usuario = [];
  constructor() { EventEmitterService.get('Usuario').subscribe(obj => this.mandarTela(obj)); }
  ngOnInit() {
  }
  mandarTela(e) {
    this.usuario = this.usuario.concat(e);
  }
  conta() {
  }
}
