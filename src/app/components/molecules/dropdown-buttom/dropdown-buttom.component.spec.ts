import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownButtomComponent } from './dropdown-buttom.component';

describe('DropdownButtomComponent', () => {
  let component: DropdownButtomComponent;
  let fixture: ComponentFixture<DropdownButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownButtomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
