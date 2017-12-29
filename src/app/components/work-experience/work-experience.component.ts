import {Component,ElementRef,OnInit} from '@angular/core';
import {InfoWindowManager} from "@agm/core";

declare var google: any;

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})

export class WorkExperienceComponent implements OnInit {

  lat: number = 50;
  lng: number = 9;
  clickedAccordian = '';
  colorOfInfoWindow = 'white';
  placementOfInfoWindow = 'left';
  fontSizeOfInfoWindow = '24px';

  employerDetails = [
    {
      lat: 35.225233,
      long: -80.843877,
      duration: 'Dec,2017 - Present',
      employer: 'Capgemini',
      technologies: ['HTML 5', 'CSS 3', 'JavaScript', 'Node JS', 'Bootstrap 4',
        'Angular 4', 'TypeScript'],
      description: "I joined this company recently and waiting for my next challenge!",
    },
    {
      lat: 40.397443,
      long: -74.135601,
      duration: 'Oct,2017 - Dec,2017',
      employer: 'AT&T',
      technologies: ['HTML 5', 'CSS 3', 'JavaScript', 'Node JS', 'Bootstrap 4',
        'Angular 4', 'TypeScript', 'BingMaps', 'Socket IO', 'Kafka', 'GitHub',
        'Git'],
      description: "This was a short contract at AT&T where I developed an internal web application" +
      "for tracking the trucks on BingMap. AT&T wanted to track trucks on the map just like" +
      "Uber does their cars. The real time updates of location of trucks are provided on " +
      "kafka topics and I wrote a small node app that subscribes to these topics " +
      "an send the data to front-end.",

    },
    {
      lat: 40.754058,
      long: -73.99335,
      duration: 'Jan,2017 - Oct,2017',
      employer: 'Fullstack Coding LLC',
      technologies:['Angular 4', 'PHP', 'Laravel 5', 'SQL Server', 'Bootstrap 4', 'SQL', 'HTML 5',
        'CSS 3', 'JavaScript', 'TypeScript', 'Mathjax','Git','GitHub'],
      description: "While in my last semester during master's, I had the pleasure of " +
      "freelancing for the start-up. We were building an educational website to learn Math using Artificial intelligence." +
      "This application would let you solve math problems step by step and provide suggestions at every step using artifical intelligence." +
      "Although the project was discontinued due to the lack of funding, this project has enabled me to learn new technologies" +
      "like Angular 4, PHP, Laravel 5.0, SQL Server etc. I am grateful to Adam Davies who gave me the opportunity after helping me learn Angular 4",
    },
    {
      lat: 12.900641,
      long: 80.0929,
      duration: 'May,2014 - July,2015',
      employer: 'Accenture',
      technologies: ['HTML 5', 'CSS 3', 'JavaScript', 'jQuery'],
      description: "After finishing my Bachelor's degree, I was looking for " +
      "proffessional work and got an internship opportunity at Accenture. After 3 months" +
      " internship, I was offered a full-time opportunity. I took the opportunity and worked there for another year before " +
      "coming to the US for Master's degree."
    },
  ];
  color = 'gray';
  zoom = 2;
  styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        },
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {}

  clicked(employer) {
    this.clickedAccordian = employer.employer;
  }
  clickedAccordianToHighlightOnMap(employer){
    this.lat = employer.lat;
    this.lng = employer.long;
    this.zoom = 6;
  }

}
