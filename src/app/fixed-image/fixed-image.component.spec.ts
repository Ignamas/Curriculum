import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedImageComponent } from './fixed-image.component';

describe('FixedImageComponent', () => {
  let component: FixedImageComponent;
  let fixture: ComponentFixture<FixedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
