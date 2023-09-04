import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss'],
})
export class SourceComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDestination() {
    this.router.navigate(['destination']);
  }
}
