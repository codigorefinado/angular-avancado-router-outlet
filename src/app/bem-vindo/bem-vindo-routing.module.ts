import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BemVindoComponent } from './bem-vindo.component';

const routes: Routes = [ { path: 'bem-vindo', component: BemVindoComponent, outlet: 'negrito' } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class BemVindoRoutingModule {
}
