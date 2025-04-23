import { ChangeDetectorRef, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ScaperoomService } from '../../../services/integration/scaperoom.service';
import { ToastrService } from 'ngx-toastr';
import { ScapeRoom } from '../../../interfaces/scaperoom';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-scaperoom',
  imports: [RouterModule, CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './add-edit-scaperoom.component.html',
  styleUrl: './add-edit-scaperoom.component.scss'
})
export class AddEditScaperoomComponent implements OnInit  {

 form: FormGroup;
 loading: boolean = false;
 id : number;
 operacion:string = "add";

private scaperoomService = inject(ScaperoomService);
private router = inject(Router);
private toastr =  inject(ToastrService);
private aRouter = inject(ActivatedRoute);
private cdRef = inject(ChangeDetectorRef); // Inyectamos ChangeDetectorRef

constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    title: ['', Validators.required],
    director: ['', Validators.required],
    poster: [''],
    genre: ['',Validators.required]
  })
    
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
}

ngOnInit(): void {
  if(this.id !== 0){
    this.operacion = "edit";
    console.log('Operación cambiada a:', this.operacion);
    this.updateProduct(this.id);
  }
}

addScapeRoom(){
  if (this.form.invalid) {
    this.toastr.warning('Por favor completa todos los campos requeridos', 'Formulario incompleto');
    return;
  }
  const scapeRoom: ScapeRoom = {
    title: this.form.value.title,
    director: this.form.value.director,
    poster: this.form.value.poster,
    genre: this.form.value.genre,
    id: 0
  }
if(this.id !== 0){
  this.scaperoomService.updateScapeRoom(this.id, scapeRoom).subscribe(() => {
    this.loading = false; 
    this.toastr.success(`El producto ${scapeRoom.title} fue actualizado con exito`,`Producto actualizado`);
    this.router.navigate(['/crud'])
  });
}else{
  this.scaperoomService.saveScapeRoom(scapeRoom).subscribe(() => {
    console.log('ScapeRoom registrado:', scapeRoom);
    this.loading = false; 
    this.toastr.success(`El producto ${scapeRoom.title} fue registrado con exito`,`Producto registrado`);
    this.router.navigate(['/crud'])
  });
  }
}
  



updateProduct(id: number){
  this.loading =true;
  this.scaperoomService.getScapeRoom(id).subscribe((data: ScapeRoom)=>{

if (!data) {
  console.error("No se recibió data del servidor.");
  return;
}
    this.loading =false;
    if (!this.form) {
      console.error("El formulario no está inicializado.");
      return;
    }

    this.form.patchValue({
      title: data.title || '',
      director: data.director || ''
    });
    console.log('Form values after patch:', this.form.value);
     // Forzar la detección de cambios para actualizar el formulario
     //this.cdRef.detectChanges();
     this.cdRef.detectChanges();
     
  });
}
}

