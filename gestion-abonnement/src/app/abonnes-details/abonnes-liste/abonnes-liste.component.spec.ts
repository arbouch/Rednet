import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnesListeComponent } from './abonnes-liste.component';

describe('AbonnesListeComponent', () => {
  let component: AbonnesListeComponent;
  let fixture: ComponentFixture<AbonnesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnesListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
