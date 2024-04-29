import { Component } from '@angular/core';
import { query_db } from 'src/app/core/header/db/aboutUs.db';

@Component({
  selector: 'app-query-section',
  templateUrl: './query-section.component.html',
  styleUrls: ['./query-section.component.scss'],
})
export class QuerySectionComponent {
 
  queries: any[] = query_db;

  isShow: any[] = [];

  handleToggle(index: any) {
    this.isShow[index] = !this.isShow[index];
  }
}
