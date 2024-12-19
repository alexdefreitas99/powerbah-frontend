import { TestBed } from '@angular/core/testing';

import { PlatformMercadoLivreService } from './platform-mercado-livre.service';

describe('PlatformMercadoLivreService', () => {
  let service: PlatformMercadoLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformMercadoLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
