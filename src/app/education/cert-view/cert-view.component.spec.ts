import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertViewComponent } from './cert-view.component';

describe('CertViewComponent', () => {
  let component: CertViewComponent;
  let fixture: ComponentFixture<CertViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
