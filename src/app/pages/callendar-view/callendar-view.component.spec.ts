import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallendarViewComponent } from './callendar-view.component';

describe('CallendarViewComponent', () => {
  let component: CallendarViewComponent;
  let fixture: ComponentFixture<CallendarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallendarViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
