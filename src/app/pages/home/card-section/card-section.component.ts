import { Component } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent {
  products: any = [
    {
      image: '../../../assets/images/brand/png/Frame 1000008716.png',
      name: 'Bollard Lamp', nPrice: '$7.00', oPrice: '$12.00',
      rating: '../../../assets/images/brand/png/star.png',
      store: '../../../assets/images/brand/png/store.png'
    },
    { image: '../../../assets/images/brand/png/Frame 1000008717.png', name: 'Bollard Lamp', nPrice: '$7.00', oPrice: '$12.00', rating: '../../../assets/images/brand/png/star.png', store: '../../../assets/images/brand/png/store.png' },
    { image: '../../../assets/images/brand/png/Frame 1000008718.png',type:'Run, Dress', name: 'Bollard Lamp', nPrice: '$7.00', oPrice: '$12.00', rating: '../../../assets/images/brand/png/star.png', store: '../../../assets/images/brand/png/store.png' },
    { image: '../../../assets/images/brand/png/Frame 1000008719.png',type:'Run, Dress', name: 'Bollard Lamp', nPrice: '$7.00', oPrice: '$12.00', rating: '../../../assets/images/brand/png/star.png', store: '../../../assets/images/brand/png/store.png' },
    { image: '../../../assets/images/brand/png/Frame 1000008720.png',type:'Run, Dress', name: 'Bollard Lamp', nPrice: '$7.00', oPrice: '$12.00', rating: '../../../assets/images/brand/png/star.png', store: '../../../assets/images/brand/png/store.png' },
    { image: '../../../assets/images/brand/png/Frame 1000008721.png',type:'Run, Dress', name: 'Bollard Lamp', nPrice: '$7.00', oPrice: '$12.00', rating: '../../../assets/images/brand/png/star.png', store: '../../../assets/images/brand/png/store.png' },
    { image: '../../../assets/images/brand/png/Frame 1000008722.png',type:'Run, Dress', name: 'Bollard Lamp', nPrice: '$7.00', oPrice: '$12.00', rating: '../../../assets/images/brand/png/star.png', store: '../../../assets/images/brand/png/store.png' },
    { image: '../../../assets/images/brand/png/Frame 1000008723.png',type:'Run, Dress', name: 'Bollard Lamp', nPrice: '$7.00', oPrice: '$12.00', rating: '../../../assets/images/brand/png/star.png', store: '../../../assets/images/brand/png/store.png' },
  ]
}
