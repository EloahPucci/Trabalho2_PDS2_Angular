import { Component, OnInit } from '@angular/core';
import { TrilhaSonora } from '../trilha-sonora';

@Component({
  selector: 'app-trilhasonora-list',
  templateUrl: './trilhasonora-list.component.html',
  styleUrls: ['./trilhasonora-list.component.css']
})
export class TrilhasonoraListComponent implements OnInit {

  constructor() { }

  trilhas_sonoras: TrilhaSonora[] = [];

  ngOnInit() {
    this.trilhas_sonoras = [{
      'codigo': 1,
      'nomeMusica': 'Totally fine',
      'artistaInterprete': 'Alan Silvestri',
      'filme': 'Vingadores - Ultimato'
    },
    {
      'codigo': 2,
      'nomeMusica': 'Home',
      'artistaInterprete': 'Michael Bublé',
      'filme': 'Muito bem acompanhada'
    },
    {
      'codigo': 3,
      'nomeMusica': 'A thousand miles',
      'artistaInterprete': 'Vanessa Carlton',
      'filme': 'As Branquelas'
    }
  ];
  }

}
