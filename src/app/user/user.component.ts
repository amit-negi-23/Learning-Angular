import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() name = ''

  @Output() addItemEvent = new EventEmitter<string>()

  addItem(){
    this.addItemEvent.emit('Amit')
  }
}
