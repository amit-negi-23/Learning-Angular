import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div (mouseover)= "onMouseOver()" >{{message}}</div>
  `,
  styles: `div{color: red; font-size: 36px}`

})
export class AppComponent {
  message = "Hey ! Hello"
    onMouseOver(){
      this.message = " What's your name ?"
    }
}