import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';
import { map, of, switchMap } from 'rxjs';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return loginService.getAuthStatus().pipe(
    switchMap(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(['/']);
        return of(false);
      }
      return loginService.isAdmin().pipe(
        map(isAdmin => {
          if (isAdmin) {
            // console.log('User is an admin:', isAdmin);
            return true;
          } else {
            // console.log('User is not an admin:', isAdmin);
            loginService.showMessage('Sem Permissões.');
            router.navigate(['/']);
            return false;
          }
        })
      );
    })
  );
}
