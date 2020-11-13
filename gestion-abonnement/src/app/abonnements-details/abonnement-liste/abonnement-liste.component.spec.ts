import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementListeComponent } from './abonnement-liste.component';

describe('AbonnementListeComponent', () => {
  let component: AbonnementListeComponent;
  let fixture: ComponentFixture<AbonnementListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
