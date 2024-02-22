import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <button [disabled]="status"> Click me!</button>
  `,
  styles: `h3{color: red}`

})
export class AppComponent {
  status = true;
}
