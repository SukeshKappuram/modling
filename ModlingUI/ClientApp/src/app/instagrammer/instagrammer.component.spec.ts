import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagrammerComponent } from './instagrammer.component';

describe('InstagrammerComponent', () => {
  let component: InstagrammerComponent;
  let fixture: ComponentFixture<InstagrammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagrammerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
