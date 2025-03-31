import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScaperoomsComponent } from '../../../src/app/components/list-scaperooms/list-scaperooms.component';
import { ScaperoomService } from '../../../src/app/services/scaperoom.service';
import { ToastrService } from 'ngx-toastr';
import { ScapeRoom } from '../../../src/app/interfaces/scaperoom';
import { of } from 'rxjs';

jest.mock('../../services/scaperoom.service');
jest.mock('ngx-toastr');



describe('ListScaperoomsComponent', () => {
  let component: ListScaperoomsComponent;
  let fixture: ComponentFixture<ListScaperoomsComponent>;
  let compiled: HTMLElement;
  let scaperoomService: jest.Mocked<ScaperoomService>;
  let toastrService: jest.Mocked<ToastrService>;


  beforeEach(async () => {
    scaperoomService = new ScaperoomService() as jest.Mocked<ScaperoomService>;
    toastrService = new ToastrService() as jest.Mocked<ToastrService>;


    await TestBed.configureTestingModule({
      imports: [ListScaperoomsComponent]
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

  test('should fetch list of scape rooms on init', () => {
    const mockScapeRooms: ScapeRoom[] = [{ id: 1, title: 'Escape Room 1' }, { id: 2, title: 'Escape Room 2' }];
    scaperoomService.getListScapeRooms.mockReturnValue(of(mockScapeRooms));

    component.ngOnInit();
    expect(scaperoomService.getListScapeRooms).toHaveBeenCalled();
    expect(component.listScapeRooms).toEqual(mockScapeRooms);
    expect(component.loading).toBeFalsy();
  });
});
