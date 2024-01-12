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

  constructor(private userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Erro ao carregar usuários:', error);
      }
    );
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