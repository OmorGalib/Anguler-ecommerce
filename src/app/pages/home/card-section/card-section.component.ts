import { Component, Input } from '@angular/core';
import { products_db } from 'src/app/core/header/db/products.db';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent {
  products: any []= products_db;
}
