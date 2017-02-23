import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BemVindoRoutingModule } from './bem-vindo-routing.module';
import { BemVindoComponent } from './bem-vindo.component';

@NgModule({
  imports: [
    CommonModule,
    BemVindoRoutingModule
  ],
  declarations: [ BemVindoComponent ]
})
export class BemVindoModule {
}
