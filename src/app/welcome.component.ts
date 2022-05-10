import { Component, Input } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `<h2>Welcome to Matrimony!</h2>`,
  styles: [`h2 { font-family: Lato; }`],
})
export class WelcomeComponent {
  @Input() name: string;
}
