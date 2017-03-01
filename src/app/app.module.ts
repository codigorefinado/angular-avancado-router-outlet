import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BemVindoModule } from './bem-vindo/bem-vindo.module';
import { ContatoModule } from './contato/contato.module';
import { AppRoutingModule } from './app-routing.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { ProspectoModule } from './prospecto/prospecto.module';
import { RotaFilhaModule } from './rota-filha/rota-fila.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    QuemSomosModule,
    BemVindoModule,
    ContatoModule,
    ProspectoModule,
    RotaFilhaModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
