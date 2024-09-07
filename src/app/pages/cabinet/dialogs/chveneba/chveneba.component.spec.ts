import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChvenebaComponent } from './chveneba.component';

describe('ChvenebaComponent', () => {
  let component: ChvenebaComponent;
  let fixture: ComponentFixture<ChvenebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChvenebaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChvenebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
