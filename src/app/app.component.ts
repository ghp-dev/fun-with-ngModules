import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shared-services';
  step = 0;

  moveStep() {
    this.step = ++this.step % 3;
  }
}
