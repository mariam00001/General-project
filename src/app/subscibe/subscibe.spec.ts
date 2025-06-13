import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscibe } from './subscibe';

describe('Subscibe', () => {
  let component: Subscibe;
  let fixture: ComponentFixture<Subscibe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subscibe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscibe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
