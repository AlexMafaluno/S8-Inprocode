import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditScaperoomComponent } from './add-edit-scaperoom.component';

describe('AddEditScaperoomComponent', () => {
  let component: AddEditScaperoomComponent;
  let fixture: ComponentFixture<AddEditScaperoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditScaperoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditScaperoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
