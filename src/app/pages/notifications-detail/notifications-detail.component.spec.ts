import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsDetailComponent } from './notifications-detail.component';

describe('NotificationsDetailComponent', () => {
  let component: NotificationsDetailComponent;
  let fixture: ComponentFixture<NotificationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
