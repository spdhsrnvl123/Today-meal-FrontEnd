import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrollEvent]'
})
export class ScrollEventDirective {

  constructor(private el:ElementRef) {}

  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: any){
    console.log(this.el);
    const el = this.el;
    const startPoint = (el.nativeElement.scrollLeft == 0);
    const terminalPoint = (el.nativeElement.scrollLeft + el.nativeElement.offsetWidth >= el.nativeElement.scrollWidth)

    // console.log(event);

    const up = event.deltaY <0
    const down = event.deltaY >0;

    if((startPoint && up) || (terminalPoint && down)){
      return;
    }

    // this.el.nativeElement.scrollBy(event.deltaY, 0, 'smooth');

    el.nativeElement.scrollLeft += event.deltaY;

  }
}
