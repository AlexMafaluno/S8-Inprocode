import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapeRoomCardComponent } from './scape-room-card.component';

describe('ScapeRoomCardComponent', () => {
  let component: ScapeRoomCardComponent;
  let fixture: ComponentFixture<ScapeRoomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScapeRoomCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScapeRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
