import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/service/DataDb.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addHeroe',
  templateUrl: './addHeroe.component.html',
  styleUrls: ['./addHeroe.component.css']
})
export class AddHeroeComponent implements OnInit {
  heroeForm: FormGroup;

  constructor( private dbData: DataDbService
              ) { }

  ngOnInit() {
    this.heroeForm = this.createFormgroup();
  }

  createFormgroup() {
    return new FormGroup({
      nombre: new FormControl(''),
      bio: new FormControl(''),
      img: new FormControl(''),
      aparicion: new FormControl(''),
      casa: new FormControl(''),
    });
  }

  onResetForm() {
    this.heroeForm.reset();
  }

  onSave() {
      this.dbData.saveMessage(this.heroeForm.value);
      this.onResetForm();
      console.log('se envio la data', this.heroeForm.value);
  }

}
