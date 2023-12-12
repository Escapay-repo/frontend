import { FooterComponent } from './components/template/footer/footer.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaCreateComponent } from './components/tabela/tabela-create/tabela-create.component';
import { TabelaDeleteComponent } from './components/tabela/tabela-delete/tabela-delete.component';
import { TabelaUpdateComponent } from './components/tabela/tabela-update/tabela-update.component';
import { TabelaReadComponent } from './components/tabela/tabela-read/tabela-read.component';
import { TabelaCrudComponent } from './components/tabela/tabela-crud/tabela-crud.component';
import { CreateComponent } from './components/button/create/create.component';
import { DropdownComponent } from './components/button/dropdown/dropdown.component';
import { HomeComponent } from './views/home/home.component';
import { ListaComponent } from './views/lista/lista.component';
import { CalculosTpvComponent } from './views/calculos-tpv/calculos-tpv.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { NavSchematicsComponent } from './components/template/nav-schematics/nav-schematics.component';
import { TaxaCustoComponent } from './views/calculos-tpv/shared/taxa-custo/taxa-custo.component';
import { ShareBandeirasTotalComponent } from './views/calculos-tpv/shared/share-bandeiras-total/share-bandeiras-total.component';
import { ShareBandeirasComponent } from './views/calculos-tpv/shared/share-bandeiras/share-bandeiras.component';
import { MarkupBandeirasComponent } from './views/calculos-tpv/shared/markup-bandeiras/markup-bandeiras.component';
import { MarkupComponent } from './views/calculos-tpv/shared/markup/markup.component';
import { CustoClientComponent } from './views/calculos-tpv/shared/custo-client/custo-client.component';
import { ReceitaFranqueadoComponent } from './views/calculos-tpv/shared/receita-franqueado/receita-franqueado.component';



import localePt from '@angular/common/locales/pt';
import { registerLocaleData, DecimalPipe } from '@angular/common';
import { TaxaVendaComponent } from './views/calculos-tpv/shared/taxa-venda/taxa-venda.component';
import { ComissaoCltComponent } from './views/calculos-tpv/shared/comissao-clt/comissao-clt.component';
import { ReceitaTotalComponent } from './views/calculos-tpv/shared/receita-total/receita-total.component';
import { FormatadorPorcentagemDirective } from './services/formatador-porcentagem.directive';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { RegisterComponent } from './components/login/register/register.component';
import { LoginComponent } from './components/login/login/login.component';
import { UserComponent } from './components/login/user/user.component';



registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TabelaCreateComponent,
    TabelaDeleteComponent,
    TabelaUpdateComponent,
    TabelaReadComponent,
    TabelaCrudComponent,
    CreateComponent,
    DropdownComponent,
    HomeComponent,
    ListaComponent,
    CalculosTpvComponent,
    NavSchematicsComponent,
    CustoClientComponent,
    TaxaCustoComponent,
    ShareBandeirasTotalComponent,
    ShareBandeirasComponent,
    MarkupBandeirasComponent,
    MarkupComponent,
    TaxaVendaComponent,
    ReceitaFranqueadoComponent,
    ComissaoCltComponent,
    ReceitaTotalComponent,
    FormatadorPorcentagemDirective,
    RegisterComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    NgxMaskDirective,
    NgxMaskPipe
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR' },
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
