import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaperoomsCollectionViewComponent } from './scaperooms-collection-view.component';

describe('ScaperoomsCollectionViewComponent', () => {
  let component: ScaperoomsCollectionViewComponent;
  let fixture: ComponentFixture<ScaperoomsCollectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaperoomsCollectionViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaperoomsCollectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
