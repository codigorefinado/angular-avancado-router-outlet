import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectoComponent } from './prospecto.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { EnderecoComponent } from './endereco/endereco.component';

const routes: Routes = [ {
  path: 'prospecto', component: ProspectoComponent, children: [
    { path: 'pessoa', component: PessoaComponent, outlet: 'mestre' },
    { path: 'endereco', component: EnderecoComponent, outlet: 'detalhe' },
  ]
} ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class ProspectoRoutingModule {
}
