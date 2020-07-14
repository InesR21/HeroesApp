import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Heroe } from './heroes.service';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private heroeCollection: AngularFirestoreCollection<Heroe>;
constructor( private afs: AngularFirestore ) {
  this.heroeCollection = afs.collection<Heroe>('heroes');
}

saveHeroe(newHeroe: Heroe): void {
  this.heroeCollection.add(newHeroe);
}

getHeroes() {
 return this.afs.collection('heroes').snapshotChanges();
}

getH(heroeId: string) {
  return this.afs.collection('heroes').doc(heroeId).snapshotChanges();
}
}
