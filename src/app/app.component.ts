import { Component } from '@angular/core';
import { SeoService } from './seo-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Word Count Tool"

  public constructor(private seoService: SeoService) {
    this.seoService.updateTitle();
  }
}
