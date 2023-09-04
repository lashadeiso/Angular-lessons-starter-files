import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  showToast!: boolean;

  constructor() {}

  ngOnInit() {
    this.showToast = true;
  }

  closeToast() {
    this.showToast = false;
  }
}
