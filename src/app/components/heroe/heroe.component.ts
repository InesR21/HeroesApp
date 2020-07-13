import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService) {
                  this.activatedRoute.params.subscribe( datos => {
                    this.heroe = this.heroesService.getHeroe( datos.id );
                  });
              }

  ngOnInit() {
  }

}
