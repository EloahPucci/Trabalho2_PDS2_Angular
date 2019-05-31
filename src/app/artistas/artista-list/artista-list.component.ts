import { Component, OnInit } from '@angular/core';
import { Artista } from '../artista';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {

  constructor() { }

  artistas: Artista[] = [];

  ngOnInit() {
    this.artistas = [{
          'codigo': 1,
          'nomeArtista': 'Julia Roberts',
          'filmes': 'Uma linda mulher; O casamento do meu melhor amigo; Um lugar chamado Notthing Hill; Comer, rezar, amar'
        },
        {
          'codigo': 2,
          'nomeArtista': 'Johnny Depp',
          'filmes': 'Edward - Mãos de tesoura; Sweeney Todd - O barbeiro demoníaco da rua Fleet; Piratas do Caribe'
        },
        {
        'codigo': 3,
        'nomeArtista': 'Anne Hathaway',
        'filmes': 'O diário da princesa; Um senhor estagiário; Interestelar; O diabo veste Prada'
        }
      ];
  }
}
