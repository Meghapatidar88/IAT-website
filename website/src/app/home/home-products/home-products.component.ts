import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-products',
  imports: [CommonModule],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent {
products = [
    'assets/product1.jpg',
    'assets/product2.jpg',
    'assets/product3.jpg',
    'assets/product4.jpg',
    'assets/product5.jpg',
    'assets/product6.jpg',
    'assets/product7.jpg',
    'assets/product8.jpg',
    'assets/product9.jpg',
    'assets/product10.jpg',
    'assets/product11.jpg',
    'assets/product12.jpg'
  ];
  selectedImage: string | null = null;

  open(image: string) {
    this.selectedImage = image;
  }

  close() {
    this.selectedImage = null;
  }
}
