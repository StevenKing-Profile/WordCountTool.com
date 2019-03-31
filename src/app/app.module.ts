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
import { AppMaterialModule } from './app-material.module';
import { FlexModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { InputboxService } from './inputbox/inputbox.service';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { WordCountComponent } from './word-count/word-count.component';
import { WordFrequencyComponent } from './word-freq/word-freq.component';
import { WordManipulationComponent } from './word-manipulation/word-manipulation.component';
import { FooterComponent } from './footer/footer.component';

import { GetValuesPipe } from './get-values.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, 
    WordCountComponent,
    WordFrequencyComponent,
    WordManipulationComponent,
    FooterComponent,
    GetValuesPipe,
    InputboxComponent,
    PrivacyPolicyComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    FormsModule,
    AdsenseModule.forRoot({adClient: 'ca-pub-7640562161899788', adSlot: 7259870550,}),
    AppRoutingModule,
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexModule
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
