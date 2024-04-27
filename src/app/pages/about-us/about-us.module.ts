import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SytemSectionComponent } from './sytem-section/sytem-section.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { QuerySectionComponent } from './query-section/query-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';


@NgModule({
  declarations: [
    HeroSectionComponent,
    SytemSectionComponent,
    QuoteSectionComponent,
    QuerySectionComponent,
    InfoSectionComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
