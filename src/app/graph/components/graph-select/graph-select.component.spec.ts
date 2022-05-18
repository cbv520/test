import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSelectComponent } from './graph-select.component';

describe('GraphSelectComponent', () => {
  let component: GraphSelectComponent;
  let fixture: ComponentFixture<GraphSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
