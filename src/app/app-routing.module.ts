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
import { UserComponent } from './components/login/user/user.component';
import { authGuard } from './components/login/auth.guard';
import { reverseAuthGuard } from './components/login/reverse-auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "tabela",
    component: TabelaCreateComponent,
    canActivate: [authGuard]
  },
  {
    path: "tabelaTpv/:id",
    component: CalculosTpvComponent,
    canActivate: [authGuard]
  },
  {
    path: "listaTabelas",
    component: ListaComponent,
    canActivate: [authGuard]
  },
  {
    path: "tabelaUpdate/:id",
    component: TabelaUpdateComponent,
    canActivate: [authGuard]
  }, {
    path: "tabelaDelete/:id",
    component: TabelaDeleteComponent,
    canActivate: [authGuard]
  }, {
    path: "login",
    component: LoginComponent,
    canActivate: [reverseAuthGuard]
  }, {
    path: "registro",
    component: RegisterComponent,
    canActivate: [reverseAuthGuard]
  }, {
    path: "user",
    component: UserComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
