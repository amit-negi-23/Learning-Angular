import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    Welcome to Angular!
  `,

})
export class AppComponent {
  title = 'myapp';
}
