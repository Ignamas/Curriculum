import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalamarComponent } from './calamar.component';

describe('CalamarComponent', () => {
  let component: CalamarComponent;
  let fixture: ComponentFixture<CalamarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalamarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
