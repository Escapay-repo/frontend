import { FooterComponent } from './components/template/footer/footer.component';
import { NgModule } from '@angular/core';
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
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavContainer } from '@angular/material/sidenav'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
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
import { ShareTpvComponent } from './views/calculos-tpv/shared/share-tpv/share-tpv.component';
import { ShareBandeirasTotalComponent } from './views/calculos-tpv/shared/share-bandeiras-total/share-bandeiras-total.component';
import { ShareBandeirasComponent } from './views/calculos-tpv/shared/share-bandeiras/share-bandeiras.component';
import { MarkupBandeirasComponent } from './views/calculos-tpv/shared/markup-bandeiras/markup-bandeiras.component';
import { MarkupComponent } from './views/calculos-tpv/shared/markup/markup.component';
import { CustoClientComponent } from './views/calculos-tpv/shared/custo-client/custo-client.component';


import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { TaxaVendaComponent } from './views/calculos-tpv/shared/taxa-venda/taxa-venda.component';


registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
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
    ShareTpvComponent,
    ShareBandeirasTotalComponent,
    ShareBandeirasComponent,
    MarkupBandeirasComponent,
    MarkupComponent,
    TaxaVendaComponent,

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
    MatRadioModule
  ],
  providers: [
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
