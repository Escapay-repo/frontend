import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';
import { map, switchMap } from 'rxjs';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const loginService = inject(LoginService)
  return loginService.getAuthStatus().pipe(
    switchMap(() => loginService.getUser()),
    map((user) => {
      if (user && user.admin) {
        console.log('usersubjecttrue', user?.admin, loginService.getUser())
        return true;
      } else {
        console.log('usersubjectfalse', user?.admin, loginService.getUser())
        router.navigate(['user']);
        return false;
      }
    })
  );
};