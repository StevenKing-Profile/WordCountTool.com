import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdsenseModule } from 'ng2-adsense';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { InputboxService } from './inputbox/inputbox.service';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { WordCountComponent } from './word-count/word-count.component';
import { WordFrequencyComponent } from './word-freq/word-freq.component';
import { WordManipulationComponent } from './word-manipulation/word-manipulation.component';
import { GetValuesPipe } from './get-values.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, 
    WordCountComponent,
    WordFrequencyComponent,
    WordManipulationComponent,
    FooterComponent,
    GetValuesPipe,
    InputboxComponent,
    PrivacyPolicyComponent
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    FormsModule,
    AdsenseModule.forRoot({adClient: 'ca-pub-8270924858996787', adSlot: 2947619746,}),
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    InputboxService
  ],
  exports: [
    InputboxComponent
  ]
})
export class AppModule { 
  
  constructor (router: Router) {}
}
