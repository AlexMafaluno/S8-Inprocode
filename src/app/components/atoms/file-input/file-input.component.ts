import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  imports: [],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.scss'
})
export class FileInputComponent {
@Output() fileSelected = new EventEmitter<File>(); 
onFileSelected(event: Event){
  const input = event.target as HTMLInputElement;
  const file = input?.files ? input.files[0] : null;

  if (file) {
    this.fileSelected.emit(file);
  } else {
    console.error('No file selected');
  }
}
}

