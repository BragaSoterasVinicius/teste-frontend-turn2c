import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { PrincipalRoutingModule } from './principal.routing.module';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { Card, CardModule } from 'primeng/card';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownComponente } from '../dropdown/dropdown.component';
@NgModule({
  declarations: [PrincipalComponent,
    DropdownComponente],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    TableModule,
    DropdownModule,
    CardModule,
    DataViewModule,
    ButtonModule,
    FormsModule
  ]
})
export class PrincipalModule { }
