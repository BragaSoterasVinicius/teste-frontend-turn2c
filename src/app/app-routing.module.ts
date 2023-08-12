import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'perfil',
    loadChildren:() => import('./perfil/perfil.module').then(x => x.PerfilModule)
  },
  {
    path: '',
    loadChildren:() => import('./principal/principal.module').then(x => x.PrincipalModule)
  },
  {
    path: 'principal',
    loadChildren:() => import('./principal/principal.module').then(x => x.PrincipalModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/principal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
