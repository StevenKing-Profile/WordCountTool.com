import { Component, Input } from '@angular/core';
import { WordFrequencyService } from './word-freq-service';
import { WordFrequency } from './word-freq.model';


@Component({
  selector: 'frequency',
  templateUrl: './word-freq.component.html',
  styleUrls: ['./word-freq.component.css']
})
export class WordFrequencyComponent {
  @Input() wordFreqObj: WordFrequency;
  title: string = "Word Frequency";

  constructor(private service: WordFrequencyService) {}

  calculate(event: string) {
    this.wordFreqObj = this.service.getWordFrequency(event);
  }
}
