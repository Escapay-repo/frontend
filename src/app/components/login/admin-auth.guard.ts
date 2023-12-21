import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';
import { map, of, switchMap } from 'rxjs';

interface User {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  token: string;
}

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return loginService.getAuthStatus().pipe(
    switchMap(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(['user']);
        return of(false);
      }
      return loginService.getUser().pipe(
        map(user => {
          if (user && loginService.isAdmin()) {
            console.log('User is an admin:', user);
            return true;
          } else {
            console.log('User is not an admin:', user);
            router.navigate(['user']);
            return false;
          }
        })
      );
    })
  );
};

//   const loginService = inject(LoginService)
//   return loginService.getAuthStatus().pipe(
//     switchMap(() => loginService.getUser()),
//     map((user) => {
//       if (user && user.admin) {
//         console.log('usersubjecttrue', user?.admin, loginService.getUser())
//         return true;
//       } else {
//         console.log('usersubjectfalse', user?.admin, loginService.getUser())
//         router.navigate(['user']);
//         return false;
//       }
//     })
//   );
// };