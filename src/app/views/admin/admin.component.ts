import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from 'src/app/modal/modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'escapay-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = [];
  displayedColumns = ['name', 'email', 'active', 'lastLogin'];
  sortColumn: keyof any = 'name';
  sortDirection: string = 'asc';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.sortUsers();
      },
      (error) => {
        console.error('Erro ao carregar usuários:', error);
      }
    );
  }

  sortUsers(): void {
    this.users = this.users.sort((a, b) => {
      const valueA = this.getValueForSorting(a, this.sortColumn);
      const valueB = this.getValueForSorting(b, this.sortColumn);

      return this.sortDirection === 'asc' ?
        this.compareValues(valueA, valueB) :
        this.compareValues(valueB, valueA);
    });
  }

  getValueForSorting(item: any, column: keyof any): any {
    if (column === 'active') {
      return item[column] ? 1 : 0;
    }

    if (column === 'lastLogin') {
      // Tratar casos em que lastLogin é nulo ou indefinido
      return item[column] ? new Date(item[column]) : new Date(0);
    }

    return item[column].toUpperCase();
  }

  compareValues(valueA: any, valueB: any): number {
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  }

  toggleSortDirection(column: keyof any): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortColumn = column;
    this.sortUsers();
  }

  getCurrentPageItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage);
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

  deleteUser(userId: string) {
    const dialogRef = this.dialog.open(ModalConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(userId).subscribe(
          () => {
            console.log('Usuário excluído com sucesso.');
            this.reloadUsers();
          },
          (error) => {
            console.error('Erro ao excluir usuário:', error);
          }
        );
      }
    });
  }

  toggleUserStatus(userId: string, currentStatus: boolean) {
    const newStatus = !currentStatus; // Inverte o status atual
    this.userService.toggleUserStatus(userId, newStatus).subscribe(
      () => {
        console.log(`Usuário ${newStatus ? 'ativado' : 'desativado'} com sucesso.`);
        this.reloadUsers();
      },
      (error) => {
        console.error(`Erro ao ${newStatus ? 'ativar' : 'desativar'} usuário:`, error);
      }
    );
  }

  private reloadUsers() {
    this.loadUsers();
  }
}