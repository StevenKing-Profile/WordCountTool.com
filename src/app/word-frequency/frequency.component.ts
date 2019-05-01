import { Component, Input } from '@angular/core';
import { InputboxService } from '../inputbox/inputbox.service';
import { WordFrequencyService } from './frequency-service';
import { WordFrequency } from './frequency.model';

@Component({
  selector: 'word-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.css'],
  providers: [WordFrequencyService]
})
export class WordFrequencyComponent {
  @Input() wordFrequency: WordFrequency;
  title: string = "Word Frequency";

  constructor(private service: WordFrequencyService, 
      private inputService: InputboxService) {}

  ngOnInit() : void {
    this.inputService.getData().subscribe((data => {
      this.wordFrequency = this.service.getWordFrequency(data);
    }));
  }
}
