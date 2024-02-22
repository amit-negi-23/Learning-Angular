import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  outputs: ['childevent']
})
export class AboutComponent {
  childevent = new EventEmitter();
  sendData(val: any){
    this.childevent.emit(val)
  }
}
