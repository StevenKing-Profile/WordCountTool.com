import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdsenseModule } from 'ng2-adsense';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { CountComponent } from './Count/count.component';
import { CountService } from './Count/count.service';
import { WordFrequencyComponent } from './word-freq/word-freq.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { FooterComponent } from './Footer/footer.component';
import { GetValuesPipe } from './get-values.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, 
    CountComponent,
    WordFrequencyComponent,
    NavbarComponent,
    FooterComponent,
    GetValuesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdsenseModule.forRoot({adClient: 'ca-pub-7640562161899788', adSlot: 7259870550,}),
    AppRoutingModule
  ],
  providers: [
    CountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (router: Router) {}
}
