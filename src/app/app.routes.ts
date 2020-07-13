import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { AddHeroeComponent } from './components/addHeroe/addHeroe/addHeroe.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'addHeroe', component: AddHeroeComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'resultados/:termino', component: ResultadosComponent },
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: '**',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
