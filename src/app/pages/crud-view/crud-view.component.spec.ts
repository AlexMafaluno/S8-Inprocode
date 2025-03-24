import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudViewComponent } from './crud-view.component';

describe('CrudViewComponent', () => {
  let component: CrudViewComponent;
  let fixture: ComponentFixture<CrudViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
