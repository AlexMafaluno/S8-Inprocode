import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPicComponent } from './avatar-pic.component';

describe('AvatarPicComponent', () => {
  let component: AvatarPicComponent;
  let fixture: ComponentFixture<AvatarPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarPicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
