import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubersComponent } from './youtubers.component';

describe('YoutubersComponent', () => {
  let component: YoutubersComponent;
  let fixture: ComponentFixture<YoutubersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
