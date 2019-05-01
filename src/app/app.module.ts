import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdsenseModule } from 'ng2-adsense';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { InputboxService } from './inputbox/inputbox.service';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { WordCountComponent } from './word-count/word-count.component';
import { WordFrequencyComponent } from './word-frequency/frequency.component';
import { WordManipulationComponent } from './word-manipulation/word-manipulation.component';
import { GetValuesPipe } from './get-values.pipe';
import { NumberSuffixPipe } from './word-count/number-suffix.pipe'
import { FooterComponent } from './footer/footer.component';
import { MetaModule } from 'ng2-meta';
import { routes, AppRoutingModule } from './app-routing.module';
import { MetaConfig, MetaService } from 'ng2-meta';

const metaConfig: MetaConfig = {
  useTitleSuffix: true,   //Append a title suffix such as a site name to all titles
  defaults: {
    title: 'Word Counter',
    titleSuffix: ' | Word Count Tool',
    description: 'Word Count Tool offers a word counter and more to help you write.',
    'og:description': 'Word Count Tool offers a word counter and more to help you write',
  }
};

@NgModule({
  declarations: [
    AppComponent,
    WordCountComponent,
    WordFrequencyComponent,
    WordManipulationComponent,
    FooterComponent,
    GetValuesPipe,
    NumberSuffixPipe,
    InputboxComponent,
    PrivacyPolicyComponent,
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    FormsModule,
    AdsenseModule.forRoot({adClient: 'ca-pub-8270924858996787', adSlot: 2947619746,}),
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(routes),
    MetaModule.forRoot(metaConfig),
    AppRoutingModule
  ],
  providers: [
    InputboxService,
  ],
  exports: [
    InputboxComponent
  ]
})
export class AppModule { }
