import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fork-join';

  color1: ThemePalette = 'primary';
  color2: ThemePalette = 'accent';
  color3: ThemePalette = 'warn';

  schoolsCnt = 0;
  hospitalsCnt = 0;
  banksCnt = 0;
  isWidgetOneSpinner = false;
  isWidgetTwoSpinner = false;
  isWidgetThreeSpinner = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.isWidgetOneSpinner = true;
    this.isWidgetTwoSpinner = true;
    this.isWidgetThreeSpinner = true;
    this.getData();
  }

  getData() {
    this.dataService.getWidgetOneData().subscribe((data) => {
      this.schoolsCnt = data;
      this.isWidgetOneSpinner = false;
    });
    this.dataService.getWidgetTwoData().subscribe((data) => {
      this.hospitalsCnt = data;
      this.isWidgetTwoSpinner = false;
    });
    this.dataService.getWidgetThreeData().subscribe((data) => {
      this.banksCnt = data;
      this.isWidgetThreeSpinner = false;
    });
  }
}
