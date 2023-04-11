import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatsTopratedComponent } from './treats-toprated.component';

describe('TreatsTopratedComponent', () => {
  let component: TreatsTopratedComponent;
  let fixture: ComponentFixture<TreatsTopratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatsTopratedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatsTopratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
