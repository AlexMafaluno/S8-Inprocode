import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScaperoomsComponent } from '../../../src/app/components/list-scaperooms/list-scaperooms.component';
import { ScaperoomService } from '../../../src/app/services/scaperoom.service';
import { ToastrService } from 'ngx-toastr';
import { ScapeRoom } from '../../../src/app/interfaces/scaperoom';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

describe('ListScaperoomsComponent', () => {
  let component: ListScaperoomsComponent;
  let fixture: ComponentFixture<ListScaperoomsComponent>;
  let compiled: HTMLElement;
  let scaperoomService: jest.Mocked<ScaperoomService>;
  let toastrService: jest.Mocked<ToastrService>;


  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      providers: [
                    ScaperoomService,
                    provideHttpClient(), // 👈 Esta es la clave
                  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListScaperoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
