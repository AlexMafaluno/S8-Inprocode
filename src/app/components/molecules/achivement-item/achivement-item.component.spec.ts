import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivementItemComponent } from './achivement-item.component';

describe('AchivementItemComponent', () => {
  let component: AchivementItemComponent;
  let fixture: ComponentFixture<AchivementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchivementItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
