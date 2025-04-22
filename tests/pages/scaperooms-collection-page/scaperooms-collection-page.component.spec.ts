import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaperoomsCollectionPageComponent } from '../../../src/app/pages/scaperooms-collection-page/scaperooms-collection-page.component';

describe('ScaperoomsCollectionPageComponent', () => {
  let component: ScaperoomsCollectionPageComponent;
  let fixture: ComponentFixture<ScaperoomsCollectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaperoomsCollectionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaperoomsCollectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
