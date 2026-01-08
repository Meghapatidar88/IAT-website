import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.css'
})
export class HomeServicesComponent {
  services = [
    {
      title: 'Automation Solutions',
      description: 'Smart automation systems to improve efficiency and reduce manual work.'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to meet your business needs.'
    },
    {
      title: 'Web & Mobile Applications',
      description: 'Modern, scalable, and secure applications for web and mobile platforms.'
    },
    {
      title: 'IoT & Smart Systems',
      description: 'Connected devices and intelligent systems for real-time monitoring.'
    },
    {
      title: 'Cloud & Digital Solutions',
      description: 'Cloud-based solutions to scale, secure, and modernize your business.'
    },
    {
      title: 'Technical Support & Maintenance',
      description: 'Reliable support and maintenance to ensure smooth system operations.'
    }
  ];
}
