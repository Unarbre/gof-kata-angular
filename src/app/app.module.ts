import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOfLifeComponent } from './components/game-of-life/game-of-life.component';
import { CellGridComponent } from './components/game-of-life/cell-grid/cell-grid.component';
import { CellComponent } from './components/game-of-life/cell-grid/cell/cell.component';
import { CellLineComponent } from './components/game-of-life/cell-grid/cell-line/cell-line.component';
import { ButtonComponent } from './components/generics/button/button.component';
import { NumberSelectorComponent } from './components/generics/number-selector/number-selector.component';
import { NextGenerationButtonComponent } from './components/game-of-life/next-generation/next-generation-button.component';
import { SizeSelectorComponent } from './components/game-of-life/size-selector/size-selector.component';
import { TitleComponent } from './components/generics/title/title.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RunButtonComponent } from './components/game-of-life/run-button/run-button.component';
import { ShuffleButtonComponent } from './components/game-of-life/shuffle-button/shuffle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOfLifeComponent,
    CellGridComponent,
    CellComponent,
    CellLineComponent,
    ButtonComponent,
    NumberSelectorComponent,
    NextGenerationButtonComponent,
    SizeSelectorComponent,
    TitleComponent,
    HeaderComponent,
    RunButtonComponent,
    ShuffleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
