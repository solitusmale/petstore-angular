import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home.component';

interface Pet {
    name: string;
    description: string;
    species: string;
    age: number;
    size: string;
    origin: string;
    price: number;
    rating?: number;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule, HomeComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    HomeComponent = HomeComponent; // <-- ovo omogućava ngComponentOutlet
    criteria = {
        name: '',
        species: '',
        price: null as number | null
    };

    pets: Pet[] = [
        { name: 'Rex', description: 'Veseo pas', species: 'dog', age: 3, size: 'Srednji', origin: 'Srbija', price: 200, rating: 5 },
        { name: 'Maca', description: 'Umiljata maca', species: 'cat', age: 2, size: 'Mala', origin: 'Srbija', price: 150, rating: 4 },
        { name: 'Tweety', description: 'Žuta ptica', species: 'bird', age: 1, size: 'Mala', origin: 'Brazil', price: 50 },
        { name: 'Nemo', description: 'Ribica u akvarijumu', species: 'fish', age: 1, size: 'Mala', origin: 'Australija', price: 30 },
        { name: 'Buddy', description: 'Veliki pas čuvar', species: 'dog', age: 5, size: 'Veliki', origin: 'Nemačka', price: 300 },
        { name: 'Whiskers', description: 'Maca koja voli igru', species: 'cat', age: 4, size: 'Srednja', origin: 'Francuska', price: 180 },
        { name: 'Polly', description: 'Papagaj koji govori', species: 'bird', age: 2, size: 'Srednja', origin: 'Peru', price: 120 },
        { name: 'Goldie', description: 'Zlatna ribica', species: 'fish', age: 1, size: 'Mala', origin: 'Japan', price: 25 },
        { name: 'Spike', description: 'Mali pas', species: 'dog', age: 2, size: 'Mala', origin: 'Srbija', price: 180 },
        { name: 'Luna', description: 'Maca za maženje', species: 'cat', age: 3, size: 'Srednja', origin: 'Italija', price: 200 }
    ];

    // Getter za filtrirane ljubimce, originalni niz ostaje netaknut
    get filteredPets() {
        return this.pets.filter(pet =>
            (!this.criteria.name || pet.name.toLowerCase().includes(this.criteria.name.toLowerCase())) &&
            (!this.criteria.species || pet.species === this.criteria.species) &&
            (!this.criteria.price || pet.price <= this.criteria.price)
        );
    }

    orderPet(pet: Pet) {
        alert(`Poručili ste ljubimca: ${pet.name} (${pet.species})`);
    }
}
