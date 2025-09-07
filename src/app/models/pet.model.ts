export interface Pet {
  id: number;
  name: string;
  description: string;
  species: 'dog' | 'cat' | 'bird' | 'fish' | 'other';
  age: number; // u godinama
  size: 'small' | 'medium' | 'large';
  origin: string;
  price: number;
  rating?: number;
}
