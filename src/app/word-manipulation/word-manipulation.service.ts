import { Injectable } from '@angular/core';
import { spongeMock } from 'spongeMock';

@Injectable({
  providedIn: 'root'
})
export class WordManipulationService {

  getLowerCase(userInput: string) {
    return userInput.toLowerCase();
  }

  getUpperCase(userInput: string) {
    return userInput.toUpperCase();
  }

  getSpongeMockCase(userInput: string) {
    return spongeMock(userInput);
  }
}