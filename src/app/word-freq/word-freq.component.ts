import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

import { WordFrequency } from './word-freq.model';
import { WordFrequencyService } from './word-freq-service';
import { InputboxService } from '../inputbox/inputbox.service';

@Component({
  selector: 'word-frequency',
  templateUrl: './word-freq.component.html',
  styleUrls: ['./word-freq.component.css'],
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
      this.updatePieChart();
    }));
  }

  public pieChartOptions: ChartOptions = {
    responsive: false,
    legend: {
      display: true,
      labels: {
        usePointStyle: true
      }
    },
    onResize: function () {
      console.log('resized')
    }
  };

  pieChartLabels: Label[] = [];
  pieChartData = [];
  pieChartType: ChartType = 'pie';
  pieChartLegend = false;
  pieChartColors = [ 
    {
      // TODO refactor
      backgroundColor: [
      "aliceblue",
      "antiquewhite",
      "aqua",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "black",
      "blanchedalmond",
      "#0000ff",
      "#8a2be2",
      "#a52a2a",
      "#deb887",
      "#5f9ea0",
      "#7fff00",
      "#d2691e",
      "#ff7f50",
      "#6495ed",
      "#fff8dc",
      "#dc143c",
      "#00ffff",
      "#00008b",
      "#008b8b",
      "#b8860b",
      "#a9a9a9",
      "#006400",
      "#a9a9a9",
      "#bdb76b",
      "#8b008b",
      "#556b2f",
      "#ff8c00",
      "#9932cc",
      "#8b0000",
      "#e9967a",
      "#8fbc8f",
      "#483d8b",
      "#2f4f4f",
      "#2f4f4f",
      "#00ced1",
      "#9400d3",
      "#ff1493",
      "#00bfff",
      "#696969",
      "#696969",
      "#1e90ff",
      "#b22222",
      "#fffaf0",
      "#228b22",
      "#ff00ff",
      "#dcdcdc",
      "#f8f8ff",
      "#daa520",
      "#ffd700",
      "#808080",
      "#008000",
      "#adff2f",
      "#808080",
       "#f0fff0",
      "#ff69b4",
      "#cd5c5c",
      "#4b0082",
      "#fffff0",
      "#f0e68c",
      "#fff0f5",
      "#e6e6fa",
      "#7cfc00",
      "#fffacd",
      "#add8e6",
      "#f08080",
      "#e0ffff",
      "#fafad2",
      "#d3d3d3",
      "#90ee90",
      "#d3d3d3",
      "#ffb6c1",
      "#ffa07a",
      "#20b2aa",
      "#87cefa",
      "#778899",
      "#778899",
      "#b0c4de",
      "#ffffe0",
      "#00ff00",
      "#32cd32",
      "#faf0e6",
      "#ff00ff",
      "#800000",
      "#66cdaa",
      "#0000cd",
      "#ba55d3",
      "#9370db",
      "#3cb371",
      "#7b68ee",
      "#00fa9a",
      "#48d1cc",
      "#c71585",
      "#191970",
      "#f5fffa",
      "#ffe4e1",
      "#ffe4b5",
      "#ffdead",
      "#000080",
      "#fdf5e6",
      "#808000",
      "#6b8e23",
      "#ffa500",
      "#ff4500",
      "#da70d6",
      "#eee8aa",
      "#98fb98",
      "#afeeee",
      "#db7093",
      "#ffefd5",
      "#ffdab9",
      "#cd853f",
      "#ffc0cb",
      "#dda0dd",
      "#b0e0e6",
      "#800080",
      "#663399",
      "#ff0000",
      "#bc8f8f",
      "#4169e1",
      "#8b4513",
      "#fa8072",
      "#f4a460",
      "#2e8b57",
      "seashell",
      "sienna",
      "silver",
      "skyblue",
      "slateblue",
      "slategray",
      "slategrey",
      "snow",
      "springgreen",
      "steelblue",
      "tan",
      "teal",
      "thistle",
      "tomato",
      "turquoise",
      "violet",
      "wheat",
      "white",
      "whitesmoke",
      "yellow",
      "yellowgreen"] 
    }
  ]

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  updatePieChart() {
    this.pieChartLabels = this.wordFrequency.pieChartKey;
    this.pieChartData = [this.wordFrequency.pieChartValue];
  }
}
