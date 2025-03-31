import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from '../../../src/app/components/card/card.component';
import { ScapeRoom } from '../../../src/app/interfaces/scaperoom';
import { RouterModule } from '@angular/router';
import { DeleteButtonComponent } from '../../../src/app/components/atoms/delete-button/delete-button.component';
import { EditButtonComponent } from '../../../src/app/components/atoms/edit-button/edit-button.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, DeleteButtonComponent, EditButtonComponent],
      declarations: [CardComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debería emitir el evento onDelete con el id correcto al llamar a handleDelete', () => {
    // Simular un ID de ScapeRoom
    const mockScapeRoom: ScapeRoom = { id: 1, title: 'Sala de prueba', director: 'Prueba' };
    component.item = mockScapeRoom;

    // Espiar el evento onDelete
    jest.spyOn(component.onDelete, 'emit');

    // Llamar al método
    component.handleDelete();

    // Verificar que se emitió el evento con el ID correcto
    expect(component.onDelete.emit).toHaveBeenCalledWith(mockScapeRoom.id);
  });

});
