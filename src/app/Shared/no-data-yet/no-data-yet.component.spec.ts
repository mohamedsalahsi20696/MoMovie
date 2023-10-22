import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataYetComponent } from './no-data-yet.component';

describe('NoDataYetComponent', () => {
  let component: NoDataYetComponent;
  let fixture: ComponentFixture<NoDataYetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoDataYetComponent]
    });
    fixture = TestBed.createComponent(NoDataYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
