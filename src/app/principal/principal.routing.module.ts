import { NgModule } from '@angular/core';import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {
    path: '',
    component:PrincipalComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PrincipalRoutingModule { }
