import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink,HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
