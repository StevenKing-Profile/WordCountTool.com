import { Component, Input } from '@angular/core';
import { CountService } from './count.service';
import { Count } from './count.model';

@Component({
  selector: 'count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
  @Input() countObj: Count;

  constructor(private service: CountService) {}

  ngOnInit() {
    console.log(this.countObj);
  }

  calc(event) : void {
    this.countObj = this.service.getCount(event);
  }
}