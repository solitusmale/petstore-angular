import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Pet {
  name: string;
  species: string;
  description: string;
  age: number;
  size: string;
  origin: string;
  price: number;
  rating?: number;
}

interface Order extends Pet {
  status: 'preuzeto' | 'u toku' | 'otkazano';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  criteria = { name: '', species: '', price: null as number | null };

  pets: Pet[] = [
    { name: 'Rex', species: 'dog', description: 'Prijateljski pas', age: 3, size: 'Srednji', origin: 'Srbija', price: 150, rating: 4 },
    { name: 'Maca', species: 'cat', description: 'Umiljata maca', age: 2, size: 'Mala', origin: 'Srbija', price: 100, rating: 5 },
    { name: 'Pik', species: 'bird', description: 'Šarena ptica', age: 1, size: 'Mala', origin: 'Brazil', price: 50 },
    { name: 'Nemo', species: 'fish', description: 'Ribica za akvarijum', age: 1, size: 'Mala', origin: 'Filipini', price: 20 },
    { name: 'Bobi', species: 'dog', description: 'Veseo pas', age: 4, size: 'Veliki', origin: 'Nemačka', price: 200 },
    { name: 'Luna', species: 'cat', description: 'Maca koja voli igru', age: 1, size: 'Mala', origin: 'Francuska', price: 120 },
    { name: 'Tweety', species: 'bird', description: 'Ptica pevačica', age: 2, size: 'Mala', origin: 'Argentina', price: 70 },
    { name: 'Dory', species: 'fish', description: 'Plava ribica', age: 1, size: 'Mala', origin: 'Australija', price: 25 },
    { name: 'Max', species: 'dog', description: 'Pametan pas', age: 5, size: 'Srednji', origin: 'Srbija', price: 180 },
    { name: 'Bella', species: 'cat', description: 'Elegantna maca', age: 3, size: 'Mala', origin: 'Italija', price: 130 },
  ];

  cart: Order[] = [];

  get filteredPets(): Pet[] {
    return this.pets.filter(pet => {
      const matchesName = pet.name.toLowerCase().includes(this.criteria.name.toLowerCase());
      const matchesSpecies = !this.criteria.species || pet.species === this.criteria.species;
      const matchesPrice = !this.criteria.price || pet.price <= this.criteria.price;
      return matchesName && matchesSpecies && matchesPrice;
    });
  }

  orderPet(pet: Pet) {
    const newOrder: Order = { ...pet, status: 'u toku' };
    this.cart.push(newOrder);
    alert(`Rezervisali ste ljubimca: ${pet.name} (${pet.species})`);
  }

  resetFilter() {
    this.criteria = { name: '', species: '', price: null };
  }

  get totalPrice(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  removeFromCart(item: Order) {
    if (item.status === 'preuzeto') {
      this.cart = this.cart.filter(x => x !== item);
      alert(`Porudžbina za ${item.name} je uklonjena.`);
    } else {
      alert('Samo narudžbine sa statusom "preuzeto" mogu biti obrisane.');
    }
  }

  editOrder(item: Order) {
    if (item.status === 'otkazano' || item.status === 'u toku') {
      const newName = prompt('Unesi novi naziv ljubimca:', item.name);
      if (newName) item.name = newName;
      const newPrice = prompt('Unesi novu cenu:', item.price.toString());
      if (newPrice) item.price = Number(newPrice);
      alert(`Porudžbina za ${item.name} je izmenjena.`);
    } else {
      alert('Narudžbine sa statusom "preuzeto" ne mogu se menjati.');
    }
  }

  rateItem(item: Order, rating: number) {
    if (item.status === 'preuzeto') {
      item.rating = rating;
    }
  }
  ratePet(pet: Pet, rating: number) {
  pet.rating = rating;
}

}
