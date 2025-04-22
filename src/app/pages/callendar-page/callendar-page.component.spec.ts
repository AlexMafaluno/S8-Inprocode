import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:tests/components/scape-room-card/scape-room-card.component.spec.ts
import { ScapeRoomCardComponent } from '../../../src/app/components/scape-room-card/scape-room-card.component';
========
import { CallendarPageComponent } from './callendar-page.component';
>>>>>>>> develop:src/app/pages/callendar-page/callendar-page.component.spec.ts

describe('CallendarPageComponent', () => {
  let component: CallendarPageComponent;
  let fixture: ComponentFixture<CallendarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallendarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
