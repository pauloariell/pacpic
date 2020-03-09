import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHouver]'
})
export class DarkenOnHouverDirective {
  @Input() brightness: string = '70';

  constructor(
    private el: ElementRef,
    private render: Renderer2
    ) {}

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.el.nativeElement,'filter', `brightness(${this.brightness})`);
    console.log('on');
  }
  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement,'filter', 'brightness(100%)');
    console.log('off');
  }
}
