import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Scaperoom, ScapeRoomItem } from '../../interfaces/scaperoom';
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
 id : number = 0;
 operacion:string = "add";

private scaperoomService = inject(ScaperoomService);
private router = inject(Router);
private toastr =  inject(ToastrService);
private aRouter = inject(ActivatedRoute);
private cdRef = inject(ChangeDetectorRef); // Inyectamos ChangeDetectorRef

constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    title: ['', Validators.required],
    director: ['', Validators.required]
  })
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
}


  ngOnInit(): void {
    
    console.log('ID:', this.id);

    if(this.id != 0){
      this.operacion = "edit";
      console.log('Operación cambiada a:', this.operacion);
      this.getProduct(this.id);
    }else {
      this.operacion = "add";
    }
  }


addProduct(){
  const scapeRoom: ScapeRoomItem = {
    title: this.form.value.title,
    director: this.form.value.director
  }
  this.loading = true;
  this.toastr.success(`El producto ${scapeRoom.title} fue registrado con exito`,`Producto registrado`);
this.scaperoomService.saveScapeRoom(scapeRoom).subscribe(() => {
  console.log("producto agregado");
  this.loading = false; 
  this.router.navigate(['/crud'])
});
}

getProduct(id: Number){
  this.loading =true;
  this.scaperoomService.getScapeRoom(id).subscribe((response:any)=>{
    console.log("respeusta del servidor:", response);
    this.loading =false;
    if (response.data) {
    this.form.patchValue({
      title: response.data.title,
      director: response.data.director
    });
     // Forzar la detección de cambios para actualizar el formulario
     this.cdRef.detectChanges();
  }
  
  });
}
}
