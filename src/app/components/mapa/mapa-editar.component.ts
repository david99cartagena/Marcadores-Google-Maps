import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css'],
})
export class MapaEditarComponent {
  formulario: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; desc: string }
  ) {
    this.formulario = this.fb.group({
      titulo: [this.data.titulo],
      desc: [this.data.desc],
    });
    // console.log(this.data);
  }

  guardarCambios() {
    // console.log('Cambios guardados:', this.formulario.value);
    this.dialogRef.close(this.formulario.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
