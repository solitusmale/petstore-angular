import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [
    {id:1, name:'Luna', description:'Vesela mala maca', species:'cat', age:2, size:'small', origin:'Serbia', price:100, rating:4},
    {id:2, name:'Rex', description:'Prijateljski pas', species:'dog', age:3, size:'large', origin:'Germany', price:300, rating:5},
    {id:3, name:'Goldie', description:'Zlatna ribica', species:'fish', age:1, size:'small', origin:'USA', price:20, rating:3},
    {id:4, name:'Coco', description:'Papagaj koji govori', species:'bird', age:4, size:'medium', origin:'Brazil', price:150, rating:5},
    // dodaj još 6 ljubimaca
  ];

  constructor() { }

  getPets(): Observable<Pet[]> {
    return of(this.pets);
  }

  searchPets(criteria: Partial<Pet>): Observable<Pet[]> {
    let filtered = this.pets;
    if (criteria.name) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(criteria.name!.toLowerCase()));
    }
    if (criteria.species) {
      filtered = filtered.filter(p => p.species === criteria.species);
    }
    if (criteria.age) {
      filtered = filtered.filter(p => p.age === criteria.age);
    }
    if (criteria.size) {
      filtered = filtered.filter(p => p.size === criteria.size);
    }
    if (criteria.origin) {
      filtered = filtered.filter(p => p.origin.toLowerCase().includes(criteria.origin!.toLowerCase()));
    }
    if (criteria.price) {
      filtered = filtered.filter(p => p.price <= criteria.price!);
    }
    return of(filtered);
  }
}
