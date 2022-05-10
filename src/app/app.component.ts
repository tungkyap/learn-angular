import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'Angular Course Deep Dive',
  }

  onImgClicked() {
    alert('Hello world!');
  }

  onKeyUp(value: string) {
    this.data.title = value;
  }
}
