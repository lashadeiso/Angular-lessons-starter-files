import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getWidgetOneData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(12);
        observer.complete();
      }, 7000);
    });
  }

  getWidgetTwoData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(29);
        observer.complete();
      }, 3000);
    });
  }

  getWidgetThreeData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(78);
        observer.complete();
      }, 5000);
    });
  }
}
