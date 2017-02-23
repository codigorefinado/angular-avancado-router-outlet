import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';

const routes: Routes = [ { path: 'contato', component: ContatoComponent, outlet: 'italico' } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class ContatoRoutingModule {
}
