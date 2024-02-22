import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'myapp';
}


/*encapsulation: viewEncapsulation.Emulated */
/*encapsulation: viewEncapsulation.ShadowDom */
/*encapsulation: viewEncapsulation.None */