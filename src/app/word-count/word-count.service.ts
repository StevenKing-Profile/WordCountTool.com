import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { Injectable } from '@angular/core';
import { WordCount } from './word-count.model';
import * as colemanLiau from 'coleman-liau';
import { NumberSuffixPipe } from './number-suffix.pipe';

@Injectable({
  providedIn: 'root'
})
export class WordCountService {
  wordCount: WordCount = new WordCount;

  constructor(private numberSuffixPipe : NumberSuffixPipe, private http: HttpClient) {}

  getCount(event): WordCount {
    this.wordCount.words = event ? (event.replace(/['";:,.?¿\-!¡]+/g, "").match(/\S+/g) || []).length : 0;
    this.wordCount.characters = event.length;
    this.wordCount.sentences = this.getSentences(event);
    this.wordCount.readability = this.getReadability(event);
    this.wordCount.unique_words = new Set(event.toLowerCase().match(/\w+/g)).size;

    return this.wordCount;
  }

  getReadability(event) {
    let gradeLevel = Math.round(colemanLiau({sentence: this.wordCount.sentences, word: this.wordCount.words, 
        letter: this.wordCount.characters}));

    return gradeLevel > 0 ? this.numberSuffixPipe.transform(gradeLevel) + " grade level" : null;
  }

  getSentences(event) {
    let re = /\b(\w\.\w\.)|([.?!])\s+(?=[A-Za-z])/g; 
    var result = event.replace(re, function(m, g1, g2) {
      return g1 ? g1 : g2+"\r";
    });
    return result ? (result.split("\r") || []).length : 0;
  }

  getPiechartData() {
    return this.wordCount.characters < 280 ? [this.wordCount.characters, 280-this.wordCount.characters] : [280, 0];
  }
}