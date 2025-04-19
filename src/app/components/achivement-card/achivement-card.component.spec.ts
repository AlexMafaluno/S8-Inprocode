import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivementCardComponent } from './achivement-card.component';

describe('AchivementCardComponent', () => {
  let component: AchivementCardComponent;
  let fixture: ComponentFixture<AchivementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchivementCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
