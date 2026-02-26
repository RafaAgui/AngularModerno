import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHero } from './list-hero';

describe('ListHero', () => {
  let component: ListHero;
  let fixture: ComponentFixture<ListHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
