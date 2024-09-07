import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAbonentsComponent } from './edit-abonents.component';

describe('EditAbonentsComponent', () => {
  let component: EditAbonentsComponent;
  let fixture: ComponentFixture<EditAbonentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAbonentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAbonentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
