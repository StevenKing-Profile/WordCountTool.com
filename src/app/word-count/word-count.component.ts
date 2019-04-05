import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';

import { InputboxService } from '../inputbox/inputbox.service';
import { WordCountService } from './word-count.service';
import { WordCount } from './word-count.model';
import { NumberSuffixPipe } from './number-suffix.pipe';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'word-count',
  templateUrl: './word-count.component.html',
  styleUrls: ['./word-count.component.css'],
  providers: [WordCountService, NumberSuffixPipe]
})
export class WordCountComponent {
  title: string = "Word Counter";
  @Input() wordCount: WordCount;
  
  type = 'doughnut';
  piechartLabels = ['Characters Remaining', 'Max Characters (280)'];
  piechartData: number[];
  isBrowser: boolean;

  constructor(private service: WordCountService, 
      private inputService: InputboxService, 
      @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() : void {
    this.inputService.getData().subscribe((data => {
      this.wordCount = this.service.getCount(data);
      this.piechartData = this.service.getPiechartData();
    }));
  }
}