import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heores.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService,
               private router: Router ) { }

  ngOnInit() {
this.heroes = this.heroesService.getHeroes();
  }
verHeroe( idx: number ) {
this.router.navigate( ['/heroe', idx]);
}
}
