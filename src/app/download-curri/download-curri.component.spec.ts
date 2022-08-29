import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCurriComponent } from './download-curri.component';

describe('DownloadCurriComponent', () => {
  let component: DownloadCurriComponent;
  let fixture: ComponentFixture<DownloadCurriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCurriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCurriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
