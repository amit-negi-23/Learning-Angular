import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <h1>Hello {{city}}</h1> `,
  styles: ` h1{color: red;} `

})
export class AppComponent {
  city = 'Delhi'
 }
