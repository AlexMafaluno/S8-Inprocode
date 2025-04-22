import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallendarPageComponent } from './callendar-page.component';

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
