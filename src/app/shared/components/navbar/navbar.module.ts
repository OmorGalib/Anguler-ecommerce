import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  exports: [NavbarComponent],
})
export class NavbarModule {}
