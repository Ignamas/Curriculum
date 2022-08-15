import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSocialsComponent } from './phone-socials.component';

describe('PhoneSocialsComponent', () => {
  let component: PhoneSocialsComponent;
  let fixture: ComponentFixture<PhoneSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneSocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
