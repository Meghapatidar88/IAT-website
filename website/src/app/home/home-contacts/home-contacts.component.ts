import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-contacts',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-contacts.component.html',
  styleUrl: './home-contacts.component.css'
})
export class HomeContactsComponent {

   contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm() {
    console.log(this.contact);
    alert('Thank you! We will contact you soon.');
  }
}
