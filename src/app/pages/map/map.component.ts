import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as L from 'leaflet'; // ✅ Importa Leaflet
import { LocationService } from '../../services/location.service';
import { Location } from '../../interfaces/location';

@Component({
  selector: 'app-map',
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;
  marker!: L.Marker;
  listLocations: Location[] = [];

  private locationService = inject(LocationService);
  ngAfterViewInit(): void {
    this.initMap();
    this.getlistLocations();
  }

  private initMap(): void {
    if (!document.getElementById('map')) {
      console.error('❌ Error: The #map element does not exist.');
      return;
    }
    this.map = L.map('map').setView([41.3851, 2.1734], 13); // ✅ Inicializa el mapa

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    L.marker([41.4667, 2.2803]).addTo(this.map);

    this.map.on('click', (event: L.LeafletMouseEvent) => {
      if (this.marker) {
        this.marker.setLatLng(event.latlng);
      } else {
        this.marker = L.marker(event.latlng).addTo(this.map);
      }
      console.log('Ubicación:', event.latlng); // Se envía al backend
    
      this.locationService
      .addLocation(event.latlng.lat, event.latlng.lng)
      .subscribe((response) => console.log(response));
    
    });
   
    
  };

  getlistLocations(){
    
    this.locationService.getListLocations().subscribe({
      next: (response) => {
        console.log('Respuesta de la API:', response); // 🔍 Para verificar los datos
        this.listLocations = Array.isArray(response)
          ? response.map((location: any) => ({
              idLocations: location.idLocations || null,
              latitud: location.latitud || '',
              longitud: location.longitud || '',
            }))
          : [];

          // Verificamos si hay datos en listLocations y agregamos los marcadores
      if (this.listLocations.length > 0) {
        this.listLocations.forEach((location: any) => {
          const lat = parseFloat(location.latitud);
          const lng = parseFloat(location.longitud);
       
         // Si las coordenadas son válidas, colocamos un marcador en el mapa
         if (!isNaN(lat) && !isNaN(lng)) {
          L.marker([lat, lng]).addTo(this.map);
        } else {
          console.error(`Latitud o longitud no válidas para el idLocation ${location.idLocations}`);
        }
      });
    } else {
      console.error('No se encontraron ubicaciones.');
    }
  },
       
      error: (error) => {
        console.error('Error al obtener escape rooms:', error);
        this.listLocations = []; // En caso de error, evita que Angular intente iterar `undefined`
      }
    
  })

}
}
  



