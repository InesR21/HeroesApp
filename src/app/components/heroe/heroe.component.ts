import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';
import { DataDbService } from 'src/app/service/DataDb.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit, OnDestroy {
  private sub: any;
  heroe: any = {};
  constructor( private activatedRoute: ActivatedRoute,
               private dbData: DataDbService
              ) {
                  this.activatedRoute.params.subscribe( params => {
                    console.log(params.id);
                    this.sub = this.dbData.getH(params.id).subscribe((heroeDb) => {
                      this.heroe = heroeDb.payload.data();
                    });
                  });
              }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
