import { Injectable } from '@angular/core';
import { WordFrequency } from './word-freq.model';

@Injectable({
  providedIn: 'root'
})
export class WordFrequencyService {
    wordFreqObj: WordFrequency = new WordFrequency;

    getWordFrequency(event) : WordFrequency {
        let wordsMap: Map<string, number> = new Map();

        let words = event.toLocaleUpperCase().split(" ");
        for (var i = 0; i< words.length; i++) {
            if (!wordsMap.has(words[i])) {
                wordsMap.set(words[i], 0);
            }
            wordsMap.set(words[i], wordsMap.get(words[i]) + 1);
        }

        this.wordFreqObj.map = wordsMap;
        return this.wordFreqObj;
    }
}