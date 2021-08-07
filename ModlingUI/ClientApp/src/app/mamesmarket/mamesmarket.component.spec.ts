import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamesmarketComponent } from './mamesmarket.component';

describe('MamesmarketComponent', () => {
  let component: MamesmarketComponent;
  let fixture: ComponentFixture<MamesmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamesmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MamesmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
