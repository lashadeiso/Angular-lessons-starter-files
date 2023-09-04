import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPromise() {
    this.router.navigate(['promise']);
  }

  goToObservable() {
    this.router.navigate(['observable']);
  }
}
