import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataDbService } from 'src/app/service/DataDb.service';

@Component({
  selector: 'app-addHeroe',
  templateUrl: './addHeroe.component.html',
  styleUrls: ['./addHeroe.component.css']
})
export class AddHeroeComponent implements OnInit {
  heroeForm: FormGroup;

  constructor( private dbData: DataDbService
              ) {
    this.heroeForm = this.createFormgroup();
    }

    get nombre() { return this.heroeForm.get('nombre'); }
    get bio() { return this.heroeForm.get('bio'); }
    get img() { return this.heroeForm.get('nombre'); }
    get aparicion() { return this.heroeForm.get('aparicion'); }
    get casa() { return this.heroeForm.get('casa'); }

  ngOnInit() {
  }

  createFormgroup() {
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      aparicion: new FormControl('', Validators.required),
      casa: new FormControl('', Validators.required),
    });
  }

  onResetForm() {
    this.heroeForm.reset();
  }
  onSave() {
    if ( this.heroeForm.valid ) {
      this.dbData.saveHeroe(this.heroeForm.value);
      this.onResetForm();
    }
    console.log('no valid');
  }

}
