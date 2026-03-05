import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPhotos } from './trending-photos';

describe('TrendingPhotos', () => {
  let component: TrendingPhotos;
  let fixture: ComponentFixture<TrendingPhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingPhotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingPhotos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
