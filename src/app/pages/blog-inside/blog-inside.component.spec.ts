import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInsideComponent } from './blog-inside.component';

describe('BlogInsideComponent', () => {
  let component: BlogInsideComponent;
  let fixture: ComponentFixture<BlogInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogInsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
