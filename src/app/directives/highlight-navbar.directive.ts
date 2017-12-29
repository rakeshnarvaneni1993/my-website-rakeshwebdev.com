import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {ActivatedRoute,Router,RouterStateSnapshot} from "@angular/router";

@Directive({
  selector: '[appHighlightNavbar]'
})
export class HighlightNavbarDirective {

  constructor(private element: ElementRef,
              private route: ActivatedRoute,
              private router: Router,
              private renderer: Renderer2) { }

  @HostListener('click') clicked() {
    const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
    const urlSnap = snapshot.url.split('/')[1].split('%20').join(' ').trim().toLowerCase();
    const childOfNav = this.element.nativeElement.children;
    for (let i = 0; i < childOfNav.length; i++) {
      childOfNav[i].children[0].style.color = 'black';
      if (childOfNav[i].textContent.trim().toLowerCase() === urlSnap) {
        childOfNav[i].children[0].style.color = 'red';
      }
    }
  }
}

