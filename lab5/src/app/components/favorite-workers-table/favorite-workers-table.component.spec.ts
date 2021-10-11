import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteWorkersTableComponent } from './favorite-workers-table.component';

describe('FavoriteWorkersTableComponent', () => {
  let component: FavoriteWorkersTableComponent;
  let fixture: ComponentFixture<FavoriteWorkersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteWorkersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteWorkersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
