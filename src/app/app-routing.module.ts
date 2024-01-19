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
import { MaquininhaCreateComponent } from './components/maquininha/maquininha-create/maquininha-create.component';
import { MaquininhaHomeComponent } from './views/maquininha-home/maquininha-home.component';
import { MaquininhaUpdateComponent } from './components/maquininha/maquininha-update/maquininha-update.component';
import { MaquininhaDeleteComponent } from './components/maquininha/maquininha-delete/maquininha-delete.component';
import { adminAuthGuard } from './components/login/admin-auth.guard';
import { PasswordComponent } from './components/login/user/password/password.component';
import { EmailComponent } from './components/login/user/email/email.component';
import { AdminComponent } from './views/admin/admin.component';
import { SimuladoComponent } from './views/calculos-tpv/shared/simulado/simulado.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "tabela",
    component: TabelaCreateComponent,
    canActivate: [adminAuthGuard],
  },
  {
    path: "tabelaTpv/:id",
    component: CalculosTpvComponent,
    canActivate: [authGuard],
  },
  {
    path: "listaTabelas",
    component: ListaComponent,
    canActivate: [authGuard],
  },
  {
    path: "tabelaUpdate/:id",
    component: TabelaUpdateComponent,
    canActivate: [adminAuthGuard],
  }, {
    path: "tabelaDelete/:id",
    component: TabelaDeleteComponent,
    canActivate: [adminAuthGuard],
  }, {
    path: "login",
    component: LoginComponent,
    canActivate: [reverseAuthGuard],
  }, {
    path: "registro",
    component: RegisterComponent,
    canActivate: [reverseAuthGuard],
  }, {
    path: "user",
    component: UserComponent,
    canActivate: [authGuard],
  }, {
    path: "admin",
    component: AdminComponent,
    canActivate: [adminAuthGuard],
  }, {
    path: "changePassword",
    component: PasswordComponent,
    canActivate: [authGuard],
  }, {
    path: "changeEmail",
    component: EmailComponent,
    canActivate: [authGuard],
  }, {
    path: "maquininhaCreate",
    component: MaquininhaCreateComponent,
    canActivate: [adminAuthGuard],
  }, {
    path: "maquininhaHome",
    component: MaquininhaHomeComponent,
    canActivate: [adminAuthGuard],
  }, {
    path: "maquininhaUpdate/:id",
    component: MaquininhaUpdateComponent,
    canActivate: [adminAuthGuard],
  }, {
    path: "maquininhaDelete/:id",
    component: MaquininhaDeleteComponent,
    canActivate: [adminAuthGuard],
  }, {
    path: "simulado",
    component: SimuladoComponent,
    // canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
