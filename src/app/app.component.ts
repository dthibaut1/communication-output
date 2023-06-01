import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '08-ch-commcomp-output';

  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(event: string): void {
    alert(event);
    this.onomatopoeiaList.push(event);
    alert(this.onomatopoeiaList);
  }
}
