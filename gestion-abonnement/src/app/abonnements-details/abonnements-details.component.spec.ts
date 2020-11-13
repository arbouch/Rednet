import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementsDetailsComponent } from './abonnements-details.component';

describe('AbonnementsDetailsComponent', () => {
  let component: AbonnementsDetailsComponent;
  let fixture: ComponentFixture<AbonnementsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
