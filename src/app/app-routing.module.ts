import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameOfLifeComponent} from "./components/game-of-life/game-of-life.component";

const routes: Routes = [
  { path: 'gameoflife', component: GameOfLifeComponent},
  { path: '**', component:  GameOfLifeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
