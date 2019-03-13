import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss']
})
export class LandingFooterComponent implements OnInit {
  @ViewChild('typewriter')
  private typewriter: ElementRef;
  currentState = 'initial';

  changeState() {
    this.currentState === 'initial' ? this.blinkOn() : this.blinkOff();
  }

  blinkOn() {
    this.typewriter.nativeElement.style.opacity = 0;
    this.currentState = 'final';
  }

  blinkOff() {
    this.typewriter.nativeElement.style.opacity = 1;
    this.currentState = 'initial';
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    interval(300).subscribe(x => {
      this.changeState();
    });
  }

}
