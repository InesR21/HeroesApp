import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  })
export class ResultadosComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService ) {
                 //Nota datos.elTerminoQueSePusoEnLaRuta
                this.activatedRoute.params.subscribe( datos => {
                   this.termino = datos.termino;
                   this.heroes = this.heroesService.buscadorHeroe(datos.termino);
                });
                }

  ngOnInit() {
  }
  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx]);
    }

}
