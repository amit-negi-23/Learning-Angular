import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <button (click)="show()" > Click me!</button>  
  `,
  styles: `h3{color: red}`

})
export class AppComponent {
    show(){
      console.log("Button clicked")
    }
}


/* [attribute] = "class property" */
/* [attribute] = "class property" */