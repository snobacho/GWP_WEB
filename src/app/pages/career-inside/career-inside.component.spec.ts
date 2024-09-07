import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerInsideComponent } from './career-inside.component';

describe('CareerInsideComponent', () => {
  let component: CareerInsideComponent;
  let fixture: ComponentFixture<CareerInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerInsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
