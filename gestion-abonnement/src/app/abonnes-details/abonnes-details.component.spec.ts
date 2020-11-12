import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnesDetailsComponent } from './abonnes-details.component';

describe('AbonnesDetailsComponent', () => {
  let component: AbonnesDetailsComponent;
  let fixture: ComponentFixture<AbonnesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
