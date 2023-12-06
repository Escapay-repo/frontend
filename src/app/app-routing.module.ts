import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TabelaCreateComponent } from './components/tabela/tabela-create/tabela-create.component';
import { CalculosTpvComponent } from './views/calculos-tpv/calculos-tpv.component';
import { ListaComponent } from './views/lista/lista.component';
import { TabelaUpdateComponent } from './components/tabela/tabela-update/tabela-update.component';
import { TabelaDeleteComponent } from './components/tabela/tabela-delete/tabela-delete.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "tabela",
    component: TabelaCreateComponent
  },
  {
    path: "tabelaTpv/:id",
    component: CalculosTpvComponent
  },
  {
    path: "listaTabelas",
    component: ListaComponent
  },
  {
    path: "tabelaUpdate/:id",
    component: TabelaUpdateComponent
  }, {
    path: "tabelaDelete/:id",
    component: TabelaDeleteComponent
  }, {
    path: "login",
    component: LoginComponent
  }, {
    path: "registro",
    component: RegisterComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
