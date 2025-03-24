import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as L from 'leaflet'; // ✅ Importa Leaflet
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-map',
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;
  marker!: L.Marker;

  private locationService = inject(LocationService);
  ngAfterViewInit(): void {
    this.initMap();
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
}
