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
    this.onomatopoeiaList.push(event);
    alert(`"${event}" a été ajouté à :\n Liste d'onomatopées: [${this.onomatopoeiaList}]`);
    // alert(this.onomatopoeiaList);
  }
}
