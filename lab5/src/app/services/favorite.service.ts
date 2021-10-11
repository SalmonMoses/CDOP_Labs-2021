import { Injectable } from '@angular/core';
import { Person, PersonInfo } from '../models/PersonInfo';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: Map<number, PersonInfo> = new Map();

  constructor() {
  }

  public getFavorites() {
    return this.favorites;
  }

  public add(id: number, person: PersonInfo) {
    if (this.favorites.has(id)) return;
    this.favorites.set(id, person);
  }

  public remove(id: number) {
    this.favorites.delete(id);
  }

  public isFavorite(id: number) {
    return this.favorites.has(id);
  }
}
