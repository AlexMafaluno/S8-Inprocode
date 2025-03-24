import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScaperoomsComponent } from './list-scaperooms.component';

describe('ListScaperoomsComponent', () => {
  let component: ListScaperoomsComponent;
  let fixture: ComponentFixture<ListScaperoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListScaperoomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListScaperoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
