import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDialogComponent } from './career-dialog.component';

describe('CareerDialogComponent', () => {
  let component: CareerDialogComponent;
  let fixture: ComponentFixture<CareerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
