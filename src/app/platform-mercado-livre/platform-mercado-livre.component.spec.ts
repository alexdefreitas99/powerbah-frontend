import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformMercadoLivreComponent } from './platform-mercado-livre.component';

describe('PlatformMercadoLivreComponent', () => {
  let component: PlatformMercadoLivreComponent;
  let fixture: ComponentFixture<PlatformMercadoLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformMercadoLivreComponent]
    });
    fixture = TestBed.createComponent(PlatformMercadoLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
