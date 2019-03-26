import { Component, OnInit, Injectable, Input } from '@angular/core';
import { WordFrequencyService } from './word-freq-service';
import { WordFrequency } from './word-freq.model';


@Component({
  selector: 'frequency',
  templateUrl: './word-freq.component.html',
  styleUrls: ['./word-freq.component.css']
})
export class WordFrequencyComponent {
  @Input() wordFreqObj: WordFrequency;

  constructor(private service: WordFrequencyService) { }

  ngOnInit() {
    console.log(this.wordFreqObj);
  }

  calculate(event) : void {
    this.wordFreqObj = this.service.getWordFrequency(event);
  }
}
