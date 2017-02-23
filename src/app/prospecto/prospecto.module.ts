import { NgModule } from '@angular/core';
import { ProspectoComponent } from './prospecto.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { RouterModule } from '@angular/router';
import { ProspectoRoutingModule } from './prospecto-routing.module';

@NgModule({
  imports: [ RouterModule, ProspectoRoutingModule ],
  exports: [],
  declarations: [ ProspectoComponent, PessoaComponent, EnderecoComponent ],
  providers: [],
})
export class ProspectoModule {
}
