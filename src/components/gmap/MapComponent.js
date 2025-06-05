import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

// URL for a bright red marker icon
const redMarkerIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

// Fixed locations
const fixedLocations = [
  { name: 'Expo Mart', lat: 28.462104367971307, lng: 77.5024388619829 },
  { name: 'Ansal Plaza', lat: 28.477697375609246, lng: 77.50859924594572 },
  { name: 'ITS Parking', lat: 28.46959931893898, lng: 77.48897413069385 },
  { name: 'APJ Road', lat: 28.473799734338876, lng: 77.48592815110374 }
];

const MapComponent = ({ center }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCjmF_4GoiVLhCmjmja-hXfbru9iDYBOGk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center || { lat: 28.4738, lng: 77.4859 }} // Default to a central location if no center provided
        zoom={14} // Adjust zoom level to fit markers
      >
        {fixedLocations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            icon={redMarkerIcon} // Set custom red marker icon
            label={location.name} // Optional: Add a label for each marker
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;