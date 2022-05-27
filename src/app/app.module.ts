import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { FormulaComponent } from './formula/formula.component';
import { MatrixCardComponent } from './matrix/matrix-card/matrix-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    FormulaComponent,
    MatrixCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
