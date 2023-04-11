import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestInTownComponent } from './best-in-town.component';

describe('BestInTownComponent', () => {
  let component: BestInTownComponent;
  let fixture: ComponentFixture<BestInTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestInTownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestInTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
