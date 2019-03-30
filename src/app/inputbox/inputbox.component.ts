import { Component, Input, OnInit } from '@angular/core';
import { InputboxService } from './inputbox.service';
import $ from 'jquery';


@Component({
  selector: 'inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css'],
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

    var textarea = $('#text-input'),
    top = textarea.scrollTop(),
    height = textarea.height();
    if(top > 0){
       textarea.css("height",top + height)
    }
  }
}
