import { Component, Input, OnInit } from '@angular/core';
import { InputboxService } from './inputbox.service';

@Component({
  selector: 'inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {
  @Input() data: string;

  constructor(private service: InputboxService) {}
  
  calculate(event) : void {
    this.data = event;
    this.service.setData(event);
  }

  ngOnInit() {
    this.data = this.service.getDataVanilla();
  }
}
