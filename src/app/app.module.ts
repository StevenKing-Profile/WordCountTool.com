import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdsenseModule } from 'ng2-adsense';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { WordCountComponent } from './word-count/word-count.component';
import { WordCountService } from './word-count/word-count.service';
import { WordFrequencyComponent } from './word-freq/word-freq.component';
import { FooterComponent } from './footer/footer.component';
import { GetValuesPipe } from './get-values.pipe';

import { AppRoutingModule } from './app-routing.module';
import { InputboxComponent } from './inputbox/inputbox.component';

@NgModule({
  declarations: [
    AppComponent, 
    WordCountComponent,
    WordFrequencyComponent,
    FooterComponent,
    GetValuesPipe,
    InputboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdsenseModule.forRoot({adClient: 'ca-pub-7640562161899788', adSlot: 7259870550,}),
    AppRoutingModule
  ],
  providers: [
    WordCountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (router: Router) {}
}
