import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  constructor() { }

  filmes: Filme[] = [];

  ngOnInit() {
    this.filmes = [{
      'codigo': 1,
      'nome': 'Harry Potter e a Pedra Filosofal',
      'genero': 'Aventura',
      'anoLancamento': '2001'
    },
    {
      'codigo': 2,
      'nome': 'Vingadores - End Game',
      'genero': 'Aventura',
      'anoLancamento': '2019'
    },
    {
      'codigo': 3,
      'nome': 'Abracadabra',
      'genero': 'Fantasia/Terror',
      'anoLancamento': '1993'
    }
  ];
  }

}
