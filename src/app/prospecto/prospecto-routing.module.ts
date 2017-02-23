import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectoComponent } from './prospecto.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { EnderecoComponent } from './endereco/endereco.component';

const routes: Routes = [ {
  path: 'prospecto', component: ProspectoComponent, children: [
    { path: 'pessoa', component: PessoaComponent, outlet: 'pessoa' },
    { path: 'endereco', component: EnderecoComponent, outlet: 'endereco' },
  ]
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class ProspectoRoutingModule {
}
