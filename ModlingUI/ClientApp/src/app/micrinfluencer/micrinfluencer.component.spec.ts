import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrinfluencerComponent } from './micrinfluencer.component';

describe('MicrinfluencerComponent', () => {
  let component: MicrinfluencerComponent;
  let fixture: ComponentFixture<MicrinfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrinfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrinfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
