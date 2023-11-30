import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'escapay-nav-schematics',
  templateUrl: './nav-schematics.component.html',
  styleUrls: ['./nav-schematics.component.css']
})
export class NavSchematicsComponent {
  @Input() showMenuButton: boolean = true;
  @Output() menuButtonClick = new EventEmitter<void>();

  toggleMenu() {
    this.menuButtonClick.emit();
  }

  constructor(private headerService: HeaderService, private breakpointObserver: BreakpointObserver) {
    this.headerService.showMenuButton = true;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}


//   constructor(private headerService: HeaderService) { }

//   get title(): string {
//     return this.headerService.headerData.title
//   }

//   get icon(): string {
//     return this.headerService.headerData.icon
//   }

//   get routeUrl(): string {
//     return this.headerService.headerData.routeUrl
//   }

//   private breakpointObserver = inject(BreakpointObserver);

//   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
//     .pipe(
//       map(result => result.matches),
//       shareReplay()
//     );
// }
