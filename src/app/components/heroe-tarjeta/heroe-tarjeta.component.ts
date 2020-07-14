import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { DataDbService } from 'src/app/service/DataDb.service';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
@Input() heroe: any = {};
@Input() index: number;
id: any = 'hola';

@Output() heroeSelect: EventEmitter<number>;

  constructor( private router: Router,
               private dbData: DataDbService
              ) {
    this.heroeSelect = new EventEmitter();
  }

  ngOnInit() {
  }
  verHeroe( ) {
     this.heroeSelect.emit( this.heroe.id );
    }

}
