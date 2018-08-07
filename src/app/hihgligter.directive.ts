import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHihgligter]'
})
export class HihgligterDirective {

  @HostListener('mouseout')
  onMouseOver() {
    this.el.nativeElement.style = "background-color:white"
  }
  el: ElementRef;
  @HostListener('mouseover')
  onMouseDown() {
    this.el.nativeElement.style = "background-color:grey"

  }
  constructor(el: ElementRef) {
    this.el = el;
  }

}
