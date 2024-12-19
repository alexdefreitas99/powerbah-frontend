import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformShopeeComponent } from './platform-shopee.component';

describe('PlatformShopeeComponent', () => {
  let component: PlatformShopeeComponent;
  let fixture: ComponentFixture<PlatformShopeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformShopeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformShopeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
