import { Component } from '@angular/core';
import { InputboxService } from './inputbox.service';

@Component({
  selector: 'inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent {

  constructor(private service: InputboxService) {}
  
  calculate(event) : void {
    this.service.setData(event);
  }
}
