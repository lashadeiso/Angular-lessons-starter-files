import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'http-interceptor';

  loadingStatus: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
