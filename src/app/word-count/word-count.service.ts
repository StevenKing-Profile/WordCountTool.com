import { Injectable } from '@angular/core';
import { WordCount } from './word-count.model';
import * as colemanLiau from 'coleman-liau';

@Injectable({
  providedIn: 'root'
})
export class WordCountService {
  wordCount: WordCount = new WordCount;

  getCount(event): WordCount {
    this.wordCount.words = event ? (event.replace(/['";:,.?¿\-!¡]+/g, "").match(/\S+/g) || []).length : 0;
    this.wordCount.characters = event.length;
    this.wordCount.sentences = this.getSentences(event);
    this.wordCount.readability = colemanLiau({sentence: this.wordCount.sentences, word: this.wordCount.words, letter: this.wordCount.characters});
    this.wordCount.unique_words = new Set(event.toLowerCase().match(/\w+/g)).size;

    return this.wordCount;
  }

  getSentences(event) {
    let re = /\b(\w\.\w\.)|([.?!])\s+(?=[A-Za-z])/g; 
    var result = event.replace(re, function(m, g1, g2){
      return g1 ? g1 : g2+"\r";
    });
    return result ? (result.split("\r") || []).length : 0;
  }

  getPiechartData() {
    if (this.wordCount.characters < 280)
      return [this.wordCount.characters, 280-this.wordCount.characters];
    else
      return [280, 0];
  }
}