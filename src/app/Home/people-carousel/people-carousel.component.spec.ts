import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCarouselComponent } from './people-carousel.component';

describe('PeopleCarouselComponent', () => {
  let component: PeopleCarouselComponent;
  let fixture: ComponentFixture<PeopleCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleCarouselComponent]
    });
    fixture = TestBed.createComponent(PeopleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
