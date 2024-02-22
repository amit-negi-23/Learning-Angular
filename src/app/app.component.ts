import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  template: `<app-user name = "Simran" ><app-user/>`,
  styles: ``

})
export class AppComponent {
  
}