import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayNavComponent } from './overlay-nav.component';

describe('OverlayNavComponent', () => {
  let component: OverlayNavComponent;
  let fixture: ComponentFixture<OverlayNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
