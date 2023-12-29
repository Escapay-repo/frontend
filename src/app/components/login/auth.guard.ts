import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { map, of, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return loginService.getAuthStatus().pipe(
    switchMap(isAuthenticated => {
      if (!isAuthenticated) {
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
//         router.navigate(['/']);
//         return of(false); // Usuário não autenticado, então bloqueia o acesso
//       } else {
//         // Se o usuário estiver autenticado, verifica se ele é um admin
//         return loginService.isAdmin().pipe(
//           map(isAdmin => {
//             if (isAdmin) {
//               console.log('User is an admin:', isAdmin);
//               return true; // O usuário é um admin, então permite o acesso
//             } else {
//               console.log('User is not an admin:', isAdmin);
//               return true; // Aqui você pode optar por bloquear o acesso e redirecionar o usuário, se preferir
//             }
//           })
//         );
//       }
//     })
//   );
// };

//   const token = localStorage.getItem('token');

//   const router = inject(Router);

//   if (token) {
//     return true
//   } else {
//     router.navigate(['login'])
//     return false;
//   }
// };
