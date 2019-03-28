import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AdsenseModule } from 'ng2-adsense';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GetValuesPipe } from './get-values.pipe';
import { InputboxComponent } from './inputbox/inputbox.component';
import { InputboxService } from './inputbox/inputbox.service';
import { WordCountComponent } from './word-count/word-count.component';
import { WordFrequencyComponent } from './word-freq/word-freq.component';

@NgModule({
  declarations: [
    AppComponent, 
    WordCountComponent,
    WordFrequencyComponent,
    FooterComponent,
    GetValuesPipe,
    InputboxComponent,
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    FormsModule,
    AdsenseModule.forRoot({adClient: 'ca-pub-7640562161899788', adSlot: 7259870550,}),
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    InputboxService
  ],
})
export class AppModule { 
  constructor (router: Router) {}
}
