import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ScapeRoom, ScapeRoomItem } from '../../interfaces/scaperoom';
import { ScaperoomService } from '../../services/scaperoom.service';
import { ProgressSpinnerComponent } from "../progress-spinner/progress-spinner.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ProgressSpinnerComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{
 form: FormGroup;
 loading: boolean = false;
 id : number;
 operacion:string = "edit";

private scaperoomService = inject(ScaperoomService);
private router = inject(Router);
private aRouter = inject(ActivatedRoute);
private toastr =  inject(ToastrService);

private cdRef = inject(ChangeDetectorRef); // Inyectamos ChangeDetectorRef

constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    title: ['', Validators.required],
    director: ['', Validators.required]
  })
    
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
}


  ngOnInit(): void {
    
    console.log('ID:', this.id);
    this.aRouter.params.subscribe(params => {
      this.id = params['id'] ? Number(params['id']) : 0;
      this.operacion = this.id !== 0 ? "edit" : "add";
  
      console.log('ID recibido:', this.id);
      console.log('Operación cambiada a:', this.operacion);
    });
    if(this.id !== 0){
      this.operacion = "edit";
      console.log('Operación cambiada a:', this.operacion);
      this.updateProduct(this.id);
    }
  }


addProduct(){
  const scapeRoom: ScapeRoom = {
    id: this.id,
    title: this.form.value.title,
    director: this.form.value.director
  }

  if(this.id !== 0){
    this.loading = true;
    scapeRoom.id = this.id;
    this.scaperoomService.updateScapeRoom(this.id, scapeRoom).subscribe(() => {
      this.loading = false; 
      this.toastr.success(`El producto ${scapeRoom.title} fue actualizado con exito`,`Producto actualizado`);
      this.router.navigate(['/crud'])
    })
  }else{
    this.loading = true;
    
  this.scaperoomService.saveScapeRoom(scapeRoom).subscribe(() => {
    this.loading = false; 
    this.toastr.success(`El producto ${scapeRoom.title} fue registrado con exito`,`Producto registrado`);
    this.router.navigate(['/crud'])
  });
  }
  
}

updateProduct(id: number){
  this.loading =true;
  this.scaperoomService.getScapeRoom(id).subscribe((data: ScapeRoom)=>{
    console.log("respeusta del servidor:", data);
    console.log(typeof data);
    console.log("Respuesta del servidor:", data);
    console.log("Título recibido:", data?.title);
    console.log("Director recibido:", data?.director);
    console.log("Controles del formulario:", this.form.controls);
console.log("¿Contiene 'title'?", this.form.contains('title'));
console.log("¿Contiene 'director'?", this.form.contains('director'));
console.log("Estado del formulario:", this.form.status);
console.log("¿Formulario deshabilitado?", this.form.disabled);

if (!data) {
  console.error("No se recibió data del servidor.");
  return;
}
    this.loading =false;
    if (!this.form) {
      console.error("El formulario no está inicializado.");
      return;
    }


// Verificar si el formulario tiene los controles adecuados
if (!this.form.controls['title']) {
  this.form.addControl('title', new FormControl(''));
}
if (!this.form.controls['director']) {
  this.form.addControl('director', new FormControl(''));
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
