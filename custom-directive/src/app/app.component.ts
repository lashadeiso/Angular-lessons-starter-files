import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Custom Directive';

  number: number = 20;
  isClicked: boolean = false;

  onClick() {
    this.isClicked = true;
  }
}
