import { Component, Input } from '@angular/core';
import { WordCountService } from './word-count.service';
import { WordCount } from './word-count.model';
import { InputboxService } from '../inputbox/inputbox.service';

@Component({
  selector: 'word-count',
  templateUrl: './word-count.component.html',
  styleUrls: ['./word-count.component.css'],
  providers: [WordCountService]
})
export class WordCountComponent {
  @Input() wordCount: WordCount;
  title: string = "Word Counter";

  constructor(private service: WordCountService, 
      private inputService: InputboxService) {}

  ngOnInit() : void {
    this.inputService.getData().subscribe((data => {
      this.wordCount = this.service.getCount(data);
    }));
  }
}