
import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, ViewContainerRef, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { SidebarHookService } from '../../../shared/services/sidebar-hook.service';
import { ActiviteUserRetour, PointGps } from 'src/app/Models/interface';
import {} from "googlemaps";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccueilComponent implements OnInit {
  listeCurrentActiviteEnCours:ActiviteUserRetour[]=[];
  listePoiintCurrentActiviteEnCours:PointGps[]=[];

  @Output() pointGpsEmitter=new EventEmitter();

  @Input() set listeActiviteEncours(val:ActiviteUserRetour[]){
    this.listeCurrentActiviteEnCours=val;
  }

  @Input() set listPointGps(val:PointGps[]){
    if(val!=null){
      this.listePoiintCurrentActiviteEnCours=val;
      this.creerTableauMaker(val);
    }
    
  }

  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat =43.6033735;
  lng = 3.9039943;

  creerTableauMaker(tabPoints:PointGps[]){
    let markers:any[]=[];
    for(let point of tabPoints){
      let obj={
         position: new google.maps.LatLng(point.latitude, point.longitude),
         map: this.map,
         title: point.heure+""
      }
      markers.push(obj);
    }
    this.markers=markers;
    this.mapInitializer();
  }

  markers:any[]=[];

  //Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 14
  };

  //Default Marker
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "Hello World!"
  });

  ngOnInit(): void {
    
  }


  getPointGps(idActiviteUser:number){
    this.pointGpsEmitter.emit(idActiviteUser);
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    //Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    //Adding default marker to map
    this.marker.setMap(this.map);

    //Adding other markers
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }
}
