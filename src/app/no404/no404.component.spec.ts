import { ComponentFixture, TestBed } from '@angular/core/testing';

import { No404Component } from './no404.component';

describe('No404Component', () => {
  let component: No404Component;
  let fixture: ComponentFixture<No404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ No404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(No404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
