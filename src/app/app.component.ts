import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    @if(isServerRunning){
      <h2>Yes, the server is running</h2>
    }
    @else{
      <h3>Server not found!</h3>
    }
  `,
  styles: `h2{color: lightgreen} h3{color: red}`

})
export class AppComponent {
  isServerRunning = true;
}
