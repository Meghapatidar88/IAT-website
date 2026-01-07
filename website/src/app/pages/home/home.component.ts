import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  activeIndex = 0;

  slides = [
    {
      image: '/assets/slide1-ai.jpg',
      title: 'Innovators Automation & Technology',
    subtitle: 'Shaping the Future with Smart Innovation',
    description:
      'We deliver cutting-edge automation and AI-driven solutions that empower businesses to grow faster and smarter.'
  },
    {
    image: '/assets/slide2-software.jpg',
    title: 'Custom Software Development',
    subtitle: 'Scalable • Secure • Reliable',
    description:
      'We build high-performance web and mobile applications tailored to your business needs using modern technologies.'
  },
    {
    image: 'assets/slide3-automation.jpg',
    title: 'Industrial & Business Automation',
    subtitle: 'Efficiency Through Technology',
    description:
      'Automate workflows, reduce costs, and improve productivity with our intelligent automation systems.'
  },
     {
    image: '/assets/slide4.-iot.jpg',
    title: 'IoT & Smart Solutions',
    subtitle: 'Connect • Monitor • Control',
    description:
      'Our IoT solutions help you track, analyze, and manage devices in real-time for smarter decision-making.'
  },
     {
    image: 'assets/slide5-cloud.jpg',
    title: 'Cloud & Digital Transformation',
    subtitle: 'Move Faster with the Cloud',
    description:
      'We help businesses migrate, manage, and scale their operations using secure cloud-based architectures.'
  },
    {
    image: 'assets/slide6-support.jpg',
    title: '24/7 Technical Support',
    subtitle: 'Your Technology Partner',
    description:
      'Our dedicated support team ensures smooth operations and continuous improvement for your systems.'
  }
  ];
}
