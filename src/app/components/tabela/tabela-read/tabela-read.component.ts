import { Component, OnInit } from '@angular/core';
import { tabelaCrud } from '../tabelaCrud';
import { TabelaService } from '../tabela-create/tabela.service';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'escapay-tabela-read',
  templateUrl: './tabela-read.component.html',
  styleUrls: ['./tabela-read.component.css']
})
export class TabelaReadComponent implements OnInit {
  tables!: tabelaCrud[]
  displayedColumns = ['tableName', 'action']
  isAdmin: boolean = false;
  sortColumn: keyof tabelaCrud = 'tableName';
  sortDirection: string = 'asc';
  sortOrder: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;

  constructor(private tabelaService: TabelaService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.tabelaService.read().subscribe(tables => {
      this.tables = tables
      this.totalItems = tables.length;
      this.sortTables('tableName');
    })
    this.loginService.isAdmin().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }
  onClickNavigateToDetails(rowId: string): void {
    const prefix = '/tabelaTpv';
    this.tabelaService.navigateToDetails(prefix, rowId);
  }

  sortTables(column: keyof tabelaCrud): void {
    this.sortColumn = column;
    this.tables = this.tables.sort((a, b) => {
      const valueA = a[column].toUpperCase();
      const valueB = b[column].toUpperCase();

      return valueA.localeCompare(valueB, 'en', { sensitivity: 'base' });
    });
  }

  toggleSortDirection(column: keyof tabelaCrud): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortTables(column);
  }

  setSortColumn(column: keyof tabelaCrud): void {
    this.sortColumn = column;
    this.toggleSortDirection(column);
  }

  getCurrentPageItems(): tabelaCrud[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.tables.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.max(Math.ceil(this.totalItems / this.itemsPerPage), 1);
  }

  changePage(action: 'prev' | 'next'): void {
    if (action === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    } else if (action === 'next' && this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  isFirstPage(): boolean {
    return this.currentPage <= 1;
  }

}

