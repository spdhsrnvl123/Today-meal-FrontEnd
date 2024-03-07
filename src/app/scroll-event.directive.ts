import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrollEvent]'
})
export class ScrollEventDirective {

  constructor(private el:ElementRef) {}

  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: any){
    const el = this.el;
    const startPoint = (el.nativeElement.scrollLeft == 0);
    const terminalPoint = (el.nativeElement.scrollLeft + el.nativeElement.offsetWidth >= el.nativeElement.scrollWidth)

    const up = event.deltaY <0
    const down = event.deltaY >0;

    if((startPoint && up) || (terminalPoint && down)){
      return;
    }

    el.nativeElement.scrollLeft += event.deltaY;

  }
}
