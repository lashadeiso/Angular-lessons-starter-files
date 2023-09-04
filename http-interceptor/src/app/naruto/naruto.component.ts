import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-naruto',
  templateUrl: './naruto.component.html',
  styleUrls: ['./naruto.component.scss'],
})
export class NarutoComponent {
  baseURL = 'https://api.jikan.moe/v4';

  narutoList!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNaruto();
  }

  getNaruto() {
    this.http
      .get(`${this.baseURL}/anime?q=naruto&sfw`)
      .subscribe((res: any) => {
        this.narutoList = res.data.slice(0, 2);
      });
  }
}
