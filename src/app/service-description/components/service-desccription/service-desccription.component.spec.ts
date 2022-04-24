import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDesccriptionComponent } from './service-desccription.component';

describe('ServiceDesccriptionComponent', () => {
  let component: ServiceDesccriptionComponent;
  let fixture: ComponentFixture<ServiceDesccriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDesccriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDesccriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
