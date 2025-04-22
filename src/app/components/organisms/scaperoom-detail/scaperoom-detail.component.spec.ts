import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaperoomDetailComponent } from './scaperoom-detail.component';

describe('ScaperoomDetailComponent', () => {
  let component: ScaperoomDetailComponent;
  let fixture: ComponentFixture<ScaperoomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaperoomDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaperoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
