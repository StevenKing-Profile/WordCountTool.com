import { Injectable } from '@angular/core';
import { WordFrequency } from './frequency.model';

@Injectable({
  providedIn: 'root'
})
export class WordFrequencyService {
  wordFreqObj: WordFrequency = new WordFrequency;

  getWordFrequency(event): WordFrequency {
    let wordsMap: Map<string, number> = new Map();
    let words = event.replace(/\n/g, " ").replace(/[^0-9a-z ]/gi, '')
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase());

    for (var i = 0; i < words.length; i++) {
      if (words[i] != '') {
        if (!wordsMap.has(words[i])) {
          wordsMap.set(words[i], 0);
        }
        wordsMap.set(words[i], wordsMap.get(words[i]) + 1);
      }
    }

    let pieChartKey = [];
    let pieChartValue = [];
    Array.from(wordsMap.keys()).forEach(function (key) {
      if (wordsMap.get(key) > 1) {
        pieChartKey.push(key);
        pieChartValue.push(wordsMap.get(key));
      }
    })

    this.wordFreqObj.map = wordsMap;
    this.wordFreqObj.usedOnce = Array.from(wordsMap.values()).filter(x => x === 1).length;
    this.wordFreqObj.pieChartKey = pieChartKey;
    this.wordFreqObj.pieChartValue = pieChartValue;
    
    return this.wordFreqObj;
  }
}