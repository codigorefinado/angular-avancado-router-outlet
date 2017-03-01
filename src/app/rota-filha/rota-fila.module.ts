import { NgModule } from '@angular/core';
import { RotaFilhaComponent } from './rota-filha.component';
import { RotaFilhaRoutingModule } from './rota-filha-routing.module';
import { ComponentTwo } from './component-two.component';
import ComponentOne from './component-one.component';
import ChildTwoNested from './child-two-nested';
import ChildTwo from './child-two';
import ChildOne from './child-one';


@NgModule({
  imports: [ RotaFilhaRoutingModule ],
  exports: [],
  declarations: [ RotaFilhaComponent, ComponentTwo, ComponentTwo, ComponentOne, ChildTwoNested, ChildTwo, ChildOne ],
  providers: [],
})
export class RotaFilhaModule {
}
