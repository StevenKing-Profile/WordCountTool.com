import { Component, OnDestroy, OnInit } from '@angular/core';

import { InputboxService } from '../inputbox/inputbox.service';
import { WordManipulationService } from './word-manipulation.service';
import { MetaService } from 'ng2-meta';

@Component({
  selector: 'word-manipulation',
  templateUrl: './word-manipulation.component.html',
  styleUrls: ['./word-manipulation.component.css'],
  providers: [WordManipulationService]
})
export class WordManipulationComponent implements OnInit {
  userInput: string;
  manipulatedText: string = "";

  constructor(private service: WordManipulationService,
      private inputService: InputboxService, private _metaService: MetaService) {}

  getLowerCase() {
    this.manipulatedText = this.service.getLowerCase(this.userInput);
  }

  getUpperCase() {
    this.manipulatedText = this.service.getUpperCase(this.userInput);
  }

  getSpongeMockCase() {
    this.manipulatedText = this.service.getSpongeMockCase(this.userInput);
  }

  ngOnInit() : void {
    this.inputService.getData().subscribe((data => {
      this.userInput = data;
    }));
  }
}