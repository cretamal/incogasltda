import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';
import { delay } from 'rxjs/operators';

import gsap from "gsap";
gsap.registerPlugin(ScrollToPlugin)
import { ScrollToPlugin } from 'gsap/all'
import { NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { timer } from 'rxjs';

declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'incogasltda';
  @ViewChild('top') top!: ElementRef;
  currentRoute:string = '';
  delay:any = timer(500);
  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ){
    // this.shoppingCartService.obtener();


    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show progress spinner or progress bar
          // console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
          // Hide progress spinner or progress bar
          this.currentRoute = event.url;
          // console.log(event);

          this.delay.subscribe(() => {
            this.goToTop();
          });

      }

      if (event instanceof NavigationError) {
           // Hide progress spinner or progress bar

          // Present error to user
          // console.log(event.error);
      }
  });

  }

  goToTop(){
    // console.log('goToTop', this.top);
    gsap.to(window, { duration: 1, scrollTo: this.top.nativeElement, delay: 0 });
  }




}
