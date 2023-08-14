import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponente } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponente;
  let fixture: ComponentFixture<DropdownComponente>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponente]
    });
    fixture = TestBed.createComponent(DropdownComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
