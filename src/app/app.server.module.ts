import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdsenseModule } from 'ng2-adsense';
import { RouterModule } from '@angular/router';
import { routes, AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { MetaModule } from 'ng2-meta';
import { MetaConfig, MetaService } from 'ng2-meta';
import { WordCountComponent } from './word-count/word-count.component';
import { WordFrequencyComponent } from './word-frequency/frequency.component';
import { WordManipulationComponent } from './word-manipulation/word-manipulation.component';
import { FooterComponent } from './footer/footer.component';
import { GetValuesPipe } from './get-values.pipe';
import { NumberSuffixPipe } from './word-count/number-suffix.pipe';
import { InputboxComponent } from './inputbox/inputbox.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

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
  imports:[
    BrowserModule.withServerTransition({appId: 'app-root'}),
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule, // comment
    RouterModule.forRoot(routes),
    MetaModule.forRoot(metaConfig),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
    