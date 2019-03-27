import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent {
  data: string
  @Output() userInput: EventEmitter<string> = new EventEmitter<string>();

  calculate(event) : void {
    this.userInput.emit(event);
  }
}
