import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeProductsComponent } from './home/home-products/home-products.component';
import { HomeTestimonialsComponent } from './home/home-testimonials/home-testimonials.component';
import { HomeContactsComponent } from './home/home-contacts/home-contacts.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,HomeComponent,HomeAboutComponent,HomeProductsComponent,HomeTestimonialsComponent,HomeContactsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
