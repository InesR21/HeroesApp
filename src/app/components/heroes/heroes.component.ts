import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { Router } from '@angular/router';
import { DataDbService } from 'src/app/service/DataDb.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heores.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  private sub: any;
  heroes: Heroe[] = [];
  loading = true;

  constructor( private heroesService: HeroesService,
               private router: Router,
               private dbData: DataDbService
              ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    const heroresD = [];
    this.sub = this.dbData.getHeroes().subscribe((heroesDb) => {
      heroesDb.forEach((heroeData: any) => {
        heroresD.push({
          id: heroeData.payload.doc.id,
          ... heroeData.payload.doc.data()
        });
      });
      console.log(heroresD);
    });
    this.heroes = heroresD;
  }
  verHeroe( idx: number ) {
  this.router.navigate( ['/heroe', idx]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
