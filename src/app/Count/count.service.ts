import { Injectable } from '@angular/core';
import { Count } from './count.model';
import * as colemanLiau from 'coleman-liau';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count: Count = new Count;

  getCount(event): Count {
    this.count.words = event ? (event.replace(/['";:,.?¿\-!¡]+/g, "").match(/\S+/g) || []).length : 0;
    this.count.characters = event.length;
    this.count.sentences = this.getSentences(event);
    this.count.readability = colemanLiau({sentence: this.count.sentences, word: this.count.words, letter: this.count.characters});
    this.count.unique_words = new Set(event.toLowerCase().match(/\w+/g)).size;

    return this.count;
  }

  getSentences(event) {
    let re = /\b(\w\.\w\.)|([.?!])\s+(?=[A-Za-z])/g; 
    var result = event.replace(re, function(m, g1, g2){
      return g1 ? g1 : g2+"\r";
    });
    return result ? (result.split("\r") || []).length : 0;
  }
}