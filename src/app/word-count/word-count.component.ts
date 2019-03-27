import { Component, Input } from '@angular/core';
import { WordCountService } from './word-count.service';
import { WordCount } from './word-count.model';

@Component({
  selector: 'word-count',
  templateUrl: './word-count.component.html',
  styleUrls: ['./word-count.component.css']
})
export class WordCountComponent {
  @Input() wordCount: WordCount;
  title: string = "Word Counter";

  constructor(private service: WordCountService) {}

  calculate(event: string) {
    this.wordCount = this.service.getCount(event);
  }
}