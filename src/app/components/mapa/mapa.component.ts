import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from 'src/app/classes/marcador.classes';
import { MatDialog } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];
  lat: number = 4.711;
  lng: number = -74.0721;
  zoom = 12;
  // marcador: Marcador | undefined;
  marcador: any;
  marcadorSeleccionado?: Marcador;
  indexSeleccionado: number = -1;
  // center: google.maps.LatLngLiteral = { lat: 4.7110, lng: -74.0721 }; // Bogotá

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    // const nuevoMarcador = new Marcador(this.lat, this.lng);
    // this.marcadores.push(nuevoMarcador);
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores')!);
    }
  }

  ngOnInit() {}

  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  openInfoWindow(marker: MapMarker, marcador: Marcador, index: number) {
    this.marcadorSeleccionado = marcador;
    this.indexSeleccionado = index;
    this.infoWindow.open(marker);
  }

  agregarMarcador(evento: google.maps.MapMouseEvent) {
    if (evento.latLng) {
      const coords = {
        lat: evento.latLng.lat(),
        lng: evento.latLng.lng(),
      };
      const nuevoMarcador = new Marcador(coords.lat, coords.lng);
      this.marcadores.push(nuevoMarcador);

      this.guardarMarcadores();
      this.snackBar.open('Marcador agregado', 'Cerrar', {
        duration: 2000,
      });
    }
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '350px',
      autoFocus: false,
      maxHeight: '90vh',
      data: { titulo: marcador.titulo, desc: marcador.desc },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        marcador.titulo = result.titulo;
        marcador.desc = result.desc;
        this.guardarMarcadores();
        this.snackBar.open('Marcador actualizado', 'Cerrar', {
          duration: 2000,
        });
      }
    });
  }

  eliminarMarcador(i: number) {
    if (i > -1) {
      this.marcadores.splice(i, 1);
      this.guardarMarcadores();
      this.infoWindow.close();
      this.snackBar.open('Marcador eliminado', 'Cerrar', {
        duration: 2000,
      });
    }
  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
}
