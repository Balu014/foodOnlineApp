import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriyaniSecComponent } from './biriyani-sec.component';

describe('BiriyaniSecComponent', () => {
  let component: BiriyaniSecComponent;
  let fixture: ComponentFixture<BiriyaniSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiriyaniSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiriyaniSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
