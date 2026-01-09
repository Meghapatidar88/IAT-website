import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-testimonials',
  imports: [CommonModule],
  templateUrl: './home-testimonials.component.html',
  styleUrl: './home-testimonials.component.css'
})
export class HomeTestimonialsComponent {

  testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Operations Manager',
    company: 'SmartTech Industries',
    rating: 5,
    message:
      'Amazing service even in a challenging budget. I got my start-up’s website designed by them and I am extremely satisfied with their service. Highly recommendable.',
    image: 'assets/testimonials/client1.jpg'
  },
  {
    name: 'Neha Verma',
    role: 'Founder',
    company: 'NextGen Solutions',
    rating: 5,
    message:
      'Their software solutions are reliable, scalable, and perfectly aligned with business needs. Highly professional team.',
    image: 'assets/testimonials/client2.jpg'
  },
  {
    name: 'Rahul Mehta',
    role: 'CTO',
    company: 'CloudCore Systems',
    rating: 4,
    message:
      'Excellent experience with IoT integration and cloud deployment. Support team is responsive and knowledgeable.',
    image: 'assets/testimonials/client3.jpg'
  }
];

}
