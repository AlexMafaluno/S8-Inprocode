import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelStatusComponent } from './level-status.component';

describe('LevelStatusComponent', () => {
  let component: LevelStatusComponent;
  let fixture: ComponentFixture<LevelStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
