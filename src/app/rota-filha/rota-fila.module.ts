import { NgModule } from '@angular/core';
import { RotaFilhaComponent } from './rota-filha.component';
import { RotaFilhaRoutingModule } from './rota-filha-routing.module';
import { ComponentTwoComponent } from './component-two.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentOneComponent } from './component-one.component';
import { ChildTwoNestedComponent } from './child-two-nested.component';
import { ChildOneComponent } from './child-one.component';
import { ChildTwoComponent } from './child-two.component';


@NgModule({
  imports: [ RotaFilhaRoutingModule, CommonModule, RouterModule ],
  exports: [],
  declarations: [ RotaFilhaComponent, ComponentTwoComponent, ComponentTwoComponent, ComponentOneComponent,
    ChildTwoNestedComponent, ChildTwoComponent, ChildOneComponent ],
  providers: [],
})
export class RotaFilhaModule {
}
