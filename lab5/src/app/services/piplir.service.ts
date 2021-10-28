import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person, PersonInfo } from '../models/PersonInfo';
import { catchError, map, tap } from 'rxjs/operators';
import { empty, Observable, of, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiplirService {
  private peopleDatabase: Map<number, PersonInfo> = new Map();

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private getNextId() {
    if(this.peopleDatabase.size === 0) {
      return 1;
    }
    return Math.max(...this.peopleDatabase.keys()) + 1;
  }

  private fetchPerson(): Observable<PersonInfo> {
    return this.http.get<Person>(`/piplir/getPerson`).pipe(
      map(person => person.person),
      catchError(this.handleError<PersonInfo>('get person'))
    );
  }

  private addPerson(person: PersonInfo) {
    this.peopleDatabase.set(this.getNextId(), person);
  }

  private fetchExtraPeople(desiredQuantity: number): Observable<void> {
    if (this.peopleDatabase.size === desiredQuantity) {
      return of(void 0);
    }

    let observables: Observable<PersonInfo>[] = [];
    for (let i = this.peopleDatabase.size; i != desiredQuantity; ++i) {
      observables.push(this.fetchPerson());
    }
    return zip(...observables).pipe(
      map(people => people.forEach(person => this.addPerson(person)))
    );
  }

  public getPeople(minQuantity: number): Observable<Map<number, PersonInfo>> {
    return this.fetchExtraPeople(minQuantity).pipe(
      map(() => this.peopleDatabase)
    );
  }
}
