import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseCuisineComponent } from './chinese-cuisine.component';

describe('ChineseCuisineComponent', () => {
  let component: ChineseCuisineComponent;
  let fixture: ComponentFixture<ChineseCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChineseCuisineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChineseCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
