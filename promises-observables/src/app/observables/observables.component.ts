import { Component } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent {
  data: number[] = [];
  count = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.count++;
      this.data.push(this.count);
    }, 1000);
  }

  getData() {
    console.log(this.data);
  }
}
