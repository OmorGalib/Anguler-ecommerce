import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { HeroWallSectionComponent } from './hero-wall-section/hero-wall-section.component';
import { LocationsComponent } from './locations/locations.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';




@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HeroSectionComponent,
    CardSectionComponent,
    HeroWallSectionComponent,
    LocationsComponent,
    ImageGalleryComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
