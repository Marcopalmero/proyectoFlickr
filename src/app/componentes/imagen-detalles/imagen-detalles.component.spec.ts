import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenDetallesComponent } from './imagen-detalles.component';

describe('ImagenDetallesComponent', () => {
  let component: ImagenDetallesComponent;
  let fixture: ComponentFixture<ImagenDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
