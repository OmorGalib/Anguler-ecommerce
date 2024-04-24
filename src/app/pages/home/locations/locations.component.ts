import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  places:any =[
    {
      title: "90 Days Return",
      address: "5the Avenue, E 28th St, Brooklyn NY, 2300 USA"
    },
    {
      title: "Free Delivery",
      address: "5the Avenue, E 28th St, London, 57th UKe"
    },
    {
      title: "Secure Payment",
      address: "5the Avenue, E 28th St, Paris, 2300 Paris"
    },
    {
      title: "100% Free Warranty",
      address: "5the Avenue, E 28th St, Khalid bin Street, UAE"
    },
  ]
}
