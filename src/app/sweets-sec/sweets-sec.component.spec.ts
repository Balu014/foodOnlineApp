import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsSecComponent } from './sweets-sec.component';

describe('SweetsSecComponent', () => {
  let component: SweetsSecComponent;
  let fixture: ComponentFixture<SweetsSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetsSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
