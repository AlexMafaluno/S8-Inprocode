import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaperoomItemComponent } from './scaperoom-item.component';

describe('ScaperoomItemComponent', () => {
  let component: ScaperoomItemComponent;
  let fixture: ComponentFixture<ScaperoomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaperoomItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaperoomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
