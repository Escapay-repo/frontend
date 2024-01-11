import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { catchError, map, of, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return loginService.getAuthStatus().pipe(
    switchMap(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(['/login']);
        return of(false);
      }

      const activeStatus = loginService.getActiveStatus();

      if (activeStatus !== null && activeStatus === false) {
        alert('Seu usuário está inativo. Entre em contato com o administrador da página.');
        loginService.clearToken();
        router.navigate(['/login']);
        return of(false);
      }

      return of(true);
    })
  );
};

//   return loginService.getAuthStatus().pipe(
//     switchMap(isAuthenticated => {
//       if (!isAuthenticated) {
//         router.navigate(['/login']);
//         return of(false);
//       }
//       return of(true);
//     })
//   );
// };
