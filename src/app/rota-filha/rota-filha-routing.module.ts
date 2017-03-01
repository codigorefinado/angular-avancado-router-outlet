import { Routes, RouterModule } from '@angular/router';
import ChildOne from './child-one';
import ChildTwo from './child-two';
import ChildTwoNested from './child-two-nested';
import ComponentOne from './component-one.component';
import ComponentTwo from './component-two.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne },
  {
    path: 'component-two/:id', component: ComponentTwo,
    children: [
      { path: '', redirectTo: 'child-one', pathMatch: 'full' },
      { path: 'child-one', component: ChildOne },
      {
        path: 'child-two', component: ChildTwo,
        children: [
          { path: '', redirectTo: 'child-one', pathMatch: 'full' },
          { path: 'child-one', component: ChildOne },
          { path: 'child-two-nested', component: ChildTwoNested }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class RotaFilhaRoutingModule {
}
