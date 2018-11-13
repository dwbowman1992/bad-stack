import {Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypewriter]'
})
export class TypewriterDirective implements OnInit {
  @Input('appTypewriter') inputText: string;
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
    const tempText = this.inputText.split('');
    // this.renderer.addClass(this.el.nativeElement, 'typewriter');
    this.typewriter(tempText);
  }
  private typewriter(tempText) {
    if (tempText.length) {
      setTimeout(() => {
        this.el.nativeElement.innerText += tempText.shift();
        this.typewriter(tempText);
      }, 500);
    }
  }
}
